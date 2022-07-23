class PageNotFound{
    static getErrorMessage(req, res) {
        res.status(404).json({
            message: `Page ${req.url} not found`
        });
    }
}


module.exports = PageNotFound;