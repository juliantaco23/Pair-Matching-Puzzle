class PageNotFound{
    static getErrorMessage(req, res, next) {
        res.status(404).json({
            message: `Page ${req.url} not found`
        });
        next();
    }
}


module.exports = PageNotFound;