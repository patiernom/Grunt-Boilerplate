/**
 * Created by Marco on 10/05/2014.
 */
var My = {
    sqrt: function(x) {
        if (x < 0) throw new Error("sqrt can't work on negative number");
        return Math.exp(Math.log(x)/2);
    }
};