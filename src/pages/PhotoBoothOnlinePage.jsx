import { useEffect, useRef, useState } from 'react';
import { createWhatsAppLink } from '../data/siteContent';
import { ArrowRightIcon, CameraIcon, DownloadIcon, RefreshIcon, SwitchHorizontalIcon } from '../components/icons';

const FRAME_WIDTH = 1200;
const FRAME_HEIGHT = 1800;
const PHOTO_X = 120;
const PHOTO_Y = 250;
const PHOTO_WIDTH = 960;
const PHOTO_HEIGHT = 1180;

function formatDateLabel() {
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date());
}

export default function PhotoBoothOnlinePage() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const outputCanvasRef = useRef(null);
  const [permissionState, setPermissionState] = useState('idle');
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [captureReady, setCaptureReady] = useState(false);

  // add
  const [facingMode, setFacingMode] = useState('user');

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const startCamera = async () => {
    stopStream();
    setDownloadUrl('');
    setCaptureReady(false);
    setPermissionState('loading');

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        // video: {
        //   facingMode: 'user',
        //   width: { ideal: 1280 },
        //   height: { ideal: 960 },
        // },

        video: {
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 960 },
        },
        audio: false,
      });

      streamRef.current = mediaStream;

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        await videoRef.current.play();
      }

      setPermissionState('granted');
    } catch (error) {
      setPermissionState('denied');
    }
  };

  const switchCamera = async () => {
    const newMode = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(newMode);

    // restart kamera dengan mode baru
    stopStream();

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { exact: newMode },
          width: { ideal: 1280 },
          height: { ideal: 960 },
        },
        audio: false,
      });

      streamRef.current = mediaStream;

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        await videoRef.current.play();
      }

      setPermissionState('granted');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      stopStream();
      if (downloadUrl) URL.revokeObjectURL(downloadUrl);
    };
  }, [downloadUrl]);

  const generateFrame = () => {
    const video = videoRef.current;
    const canvas = outputCanvasRef.current;
    if (!video || !canvas) return;

    setIsProcessing(true);

    const context = canvas.getContext('2d');
    canvas.width = FRAME_WIDTH;
    canvas.height = FRAME_HEIGHT;

    context.clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);

    const backgroundGradient = context.createLinearGradient(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    backgroundGradient.addColorStop(0, '#ffc544');
    backgroundGradient.addColorStop(1, '#00b8c8');
    context.fillStyle = backgroundGradient;
    context.fillRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);

    context.fillStyle = 'rgba(255,255,255,0.92)';
    roundRect(context, 70, 70, FRAME_WIDTH - 140, FRAME_HEIGHT - 140, 44);
    context.fill();

    context.fillStyle = '#12263a';
    context.font = '700 56px Inter, sans-serif';
    context.fillText('MOVEMENT PHOTOBOOTH', 120, 160);

    context.fillStyle = '#5e6d7b';
    context.font = '500 34px Inter, sans-serif';
    context.fillText('photobooth online', 120, 208);

    const sourceWidth = video.videoWidth;
    const sourceHeight = video.videoHeight;
    const sourceRatio = sourceWidth / sourceHeight;
    const targetRatio = PHOTO_WIDTH / PHOTO_HEIGHT;

    let cropWidth = sourceWidth;
    let cropHeight = sourceHeight;
    let cropX = 0;
    let cropY = 0;

    if (sourceRatio > targetRatio) {
      cropWidth = sourceHeight * targetRatio;
      cropX = (sourceWidth - cropWidth) / 2;
    } else {
      cropHeight = sourceWidth / targetRatio;
      cropY = (sourceHeight - cropHeight) / 2;
    }

    context.save();
    roundRect(context, PHOTO_X, PHOTO_Y, PHOTO_WIDTH, PHOTO_HEIGHT, 36);
    context.clip();
    // context.drawImage(video, cropX, cropY, cropWidth, cropHeight, PHOTO_X, PHOTO_Y, PHOTO_WIDTH, PHOTO_HEIGHT);
    if (facingMode === 'user') {
      context.save();
      context.scale(-1, 1);
      context.drawImage(
        video,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        -(PHOTO_X + PHOTO_WIDTH),
        PHOTO_Y,
        PHOTO_WIDTH,
        PHOTO_HEIGHT
      );
      context.restore();
    } else {
      context.drawImage(
        video,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        PHOTO_X,
        PHOTO_Y,
        PHOTO_WIDTH,
        PHOTO_HEIGHT
      );
    }

    context.restore();

    context.strokeStyle = 'rgba(18,38,58,0.08)';
    context.lineWidth = 6;
    roundRect(context, PHOTO_X, PHOTO_Y, PHOTO_WIDTH, PHOTO_HEIGHT, 36);
    context.stroke();

    context.fillStyle = '#12263a';
    context.font = '700 46px Inter, sans-serif';
    context.fillText('today looked good on you ✦', 120, 1510);

    context.fillStyle = '#5e6d7b';
    context.font = '500 32px Inter, sans-serif';
    context.fillText(formatDateLabel(), 120, 1565);
    context.fillText('Tanpa simpan database • langsung download', 120, 1620);

    context.fillStyle = '#00b8c8';
    context.fillRect(120, 1670, 220, 16);
    context.fillStyle = '#ffc544';
    context.fillRect(360, 1670, 220, 16);

    canvas.toBlob((blob) => {
      if (!blob) {
        setIsProcessing(false);
        return;
      }
      if (downloadUrl) URL.revokeObjectURL(downloadUrl);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      setCaptureReady(true);
      setIsProcessing(false);
    }, 'image/png');
  };

  return (
    <>
      <section className="section section-top-pad online-top-section">
        <div className="container online-top-shell">
          <div className="online-top-copy">
            <span className="eyebrow">Photobooth Online</span>
            <h1>Masuk kamera. Jepret. Jadi frame ala photobooth. Langsung download.</h1>
            <p>Nggak pakai database. Nggak nyimpen hasil user. Semua proses langsung di browser pengguna.</p>
            <div className="hero-actions">
              <button type="button" className="button button-primary" onClick={startCamera}>
                <CameraIcon className="button-icon" />
                Buka kamera
              </button>
              <a className="button button-secondary" href={createWhatsAppLink('Halo Movement Photobooth, aku tertarik dengan fitur photobooth online untuk event.') } target="_blank" rel="noreferrer">
                Tanya integrasi event
                <ArrowRightIcon className="button-icon" />
              </a>
            </div>
          </div>
          <div className="online-note-card">
            <strong>Yang terjadi setelah klik:</strong>
            <ul className="check-list compact-list">
              <li><span>1 foto saja, tampil seperti frame photostrip elegan.</span></li>
              <li><span>Hasil bisa langsung diunduh oleh user.</span></li>
              <li><span>Foto tidak disimpan ke server atau database.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-bottom-spacer">
        <div className="container online-booth-shell">
          <div className="online-camera-card">
            <div className="online-card-head">
              <div>
                <span className="pill accent">Live Camera</span>
                <h2>Preview kamera</h2>
              </div>
              {permissionState === 'granted' ? <span className="status-badge success">Siap dipakai</span> : null}
            </div>

            <div className="camera-stage">
              <video ref={videoRef} className="camera-video" playsInline muted autoPlay />
              {permissionState !== 'granted' ? (
                <div className="camera-overlay-message">
                  <CameraIcon className="camera-placeholder-icon" />
                  <strong>{permissionState === 'denied' ? 'Izin kamera belum aktif' : 'Klik buka kamera dulu'}</strong>
                  <p>
                    {permissionState === 'denied'
                      ? 'Coba izinkan akses kamera di browser, lalu klik buka kamera lagi.'
                      : 'Begitu kamera aktif, kamu bisa langsung jepret dan bikin hasil frame.'}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="online-action-row">
              <button
                type="button"
                className="button button-primary"
                onClick={generateFrame}
                disabled={permissionState !== 'granted' || isProcessing}
              >
                <CameraIcon className="button-icon" />
                {isProcessing ? 'Memproses...' : 'Jepret sekarang'}
              </button>

              <button
                type="button"
                className="button button-secondary"
                onClick={startCamera}
              >
                <RefreshIcon className="button-icon" />
                Ulang kamera
              </button>

              <button
                type="button"
                className="button button-secondary"
                onClick={switchCamera}
                disabled={permissionState !== 'granted'}
              >
                <SwitchHorizontalIcon className="button-icon" />
                Ganti kamera
              </button>

            </div>
          </div>

          <div className="online-result-card">
            <div className="online-card-head">
              <div>
                <span className="pill gold">Output</span>
                <h2>Hasil frame</h2>
              </div>
              {captureReady ? <span className="status-badge">Siap di-download</span> : null}
            </div>

            <div className="result-preview-shell">
              {downloadUrl ? <img src={downloadUrl} alt="Hasil photobooth online" className="result-preview-image" /> : <div className="result-placeholder">Hasil jepretan kamu akan muncul di sini.</div>}
            </div>

            <canvas ref={outputCanvasRef} className="hidden-canvas" />

            <div className="online-action-row">
              <a className={`button button-primary ${!downloadUrl ? 'is-disabled' : ''}`} href={downloadUrl || '#'} download="movement-photobooth-online.png" aria-disabled={!downloadUrl}>
                <DownloadIcon className="button-icon" />
                Download hasil
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}
