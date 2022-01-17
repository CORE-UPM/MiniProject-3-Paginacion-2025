const urlm = require('url');

// returns the new url adding pageno to the query.
function addPagenoToUrl(req, pageno) {
    const url = new urlm.URL(req.protocol + "://" + req.get('host') + req.baseUrl + req.url);
    url.searchParams.set("pageno", pageno);
    return url.href;
}

// Helper function used to paginate.
// Return the HTML links used to paginate.
exports.paginate = (totalItems, itemsPerPage, currentPage, req) => {

    if (totalItems <= itemsPerPage) { return false; }
    const total = Math.ceil(totalItems / itemsPerPage);

    const html = [];
    html.push('<nav>');

    if (currentPage > 1) {
        const url = addPagenoToUrl(req, currentPage - 1);
        html.push('<a href="' + url + '" style="border:1px solid; margin:5px; padding:5px;">Anterior</a>');
    } else {
        html.push('Anterior');
    }
    if (currentPage < total) {
        const url = addPagenoToUrl(req, currentPage + 1);
        html.push('<a href="' + url + '" style="border:1px solid; margin:5px; padding:5px;">Siguiente</a>');
    } else {
        html.push('Siguiente');
    }

    html.push('</nav>');
    return html.join('');
};