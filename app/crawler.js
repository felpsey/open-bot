module.exports = {
    scrape: function(axios, url) {
        console.log('Scraping ' + url);

        return new Promise(function(resolve, reject) {
            (async function() {  
                try {
                    const response = await axios.get(
                        'https://' + url
                    )

                    resolve(response);
                } catch (error) {
                    reject(error);
                }
            })();
        });
    }
}