/**
 * Created by Marco on 04/03/2015.
 */
var Money = function(value){
    return {
        amount:value,
        multiply:function(multiplier){
            this.amount = this.amount * multiplier;
        }
    };
};