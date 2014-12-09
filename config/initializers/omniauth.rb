OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '897402358581-ekp9t2m3h6qdubfr9gtahnhebsvmek2c.apps.googleusercontent.com', 't6ADPnb5PxQutvkTmpejOGOs', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end