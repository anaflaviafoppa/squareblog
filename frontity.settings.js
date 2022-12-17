const settings = {
  "name": "squareblog",
  "state": {
    "frontity": {
      "url": "http://blog.bomdebeer.com.br",
    }
  },
  "packages": [
    {
      "name": "squareblog",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://blog.bomdebeer.com.br"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
