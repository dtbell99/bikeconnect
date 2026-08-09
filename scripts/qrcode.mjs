import QRCode from 'qrcode';

const url = 'https://bloomingtonbicycleclub.org';

QRCode.toFile('qrcode.png', url, {
  errorCorrectionLevel: 'H',
  margin: 1,
  color: {
    dark: '#000000', // Black dots
    light: '#FFFFFF' // White background
  }
}, (err) => {
  if (err) throw err;
  console.log('QR code saved successfully!');
});
