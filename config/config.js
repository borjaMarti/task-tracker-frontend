const config = {
    production: {
      apiUrl: ""
    },
    development: {
      apiUrl: "http://localhost:2121"
    }
  };
  
export default config[import.meta.env.MODE];