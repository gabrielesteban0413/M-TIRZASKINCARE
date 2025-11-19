// bcms.config.js (o el nombre de tu archivo de configuración de BCMS)
module.exports = {
  cms: {
    origin: process.env.BCMS_CMS_ORIGIN || 'https://cloud-api.thebcms.com',
    key: {
      id: process.env.BCMS_API_KEY_ID,
      secret: process.env.BCMS_API_KEY_SECRET,
    },
  },
};
