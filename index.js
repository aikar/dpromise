/**
 * Returns a deferred promise, allowing greater control over when the promise is fulfilled.
 *
 * Offers more utility for using this promise as a callback and properties on fulfillment state.
 * @author Daniel Ennis
 * @licence MIT
 * @return {DPromise}
 */
function deferPromise() {
    let _resolve, _reject, _cb, _resolved = false, _rejected = false;
    const p = new module.exports.Promise(function (resolve, reject) {
        _resolve = resolve;
        _reject = reject;
    });
    p.resolve = function (v) {
        if (_resolved || _rejected) return;
        _resolved = true;
        _resolve(v);
    };
    p.reject = function (e) {
        if (_resolved || _rejected) return;
        _rejected = true;
        _reject(e);
    };
    Object.defineProperty(p, 'callback', {
        get: function () {
            if (_cb) return _cb;
            return _cb = function (err, v) {
                if (err) p.reject(err);
                else p.resolve(v);
            };
        }
    });
    Object.defineProperty(p, 'resolved', {
        get: function () { return _resolved; }
    });
    Object.defineProperty(p, 'rejected', {
        get: function () { return _rejected; }
    });
    return p;
}

module.exports = {
    Promise: Promise,
    deferPromise: deferPromise
};
