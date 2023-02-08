module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: 'djnd2id3d',
          api_key: '367337795921722',
          api_secret: 'fg0AwAsWTJ-2bAliI0LbB_8Iwhk',
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });