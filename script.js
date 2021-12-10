var CartFunctionality = props => {
  var productNames = ["MI", "OnePlus", "Honour", "IPhone", "Lenovo", "Redmi"];
  var productPrices = [1500, 50000, 8000, 75000, 9000, 45000];
  var productQty = [1, 0, 0, 1, 1, 0];
  var [qty, setQty] = React.useState(productQty);
  var [totalQty, setTotalQty] = React.useState(0);

  var calcluateQty = () => {
    var total = 0;
    qty.forEach(q => {
      total += q;
    });

    return total;
  };

  var calcluateAmount = () => {
    var total = 0;
    qty.forEach((q, index) => {
      total += q * productPrices[index];
    });

    return total;
  };


  var addToCart = index => {
    setQty(qty.map((q, i) => i == index ? q + 1 : q));
  };

  function removeCart(index) {
    setQty(qty.map((q, i) => i == index && q > 0 ? q - 1 : q));
  };

  return /*#__PURE__*/(
    React.createElement("div", null,

    productNames.map((nm, index) => /*#__PURE__*/
    React.createElement("div", { key: index }, /*#__PURE__*/
    React.createElement("h3", null, nm, " : ", productPrices[index], ", Qty: ",
    qty[index]), /*#__PURE__*/
    React.createElement("button", { onClick: () => addToCart(index) }, "Add"), /*#__PURE__*/
    React.createElement("button", { onClick: () => removeCart(index) }, "Remove"))), /*#__PURE__*/



    React.createElement("h4", null, "Total qty: ", calcluateQty()), /*#__PURE__*/
    React.createElement("h4", null, "Total amount: ", calcluateAmount())));


};

ReactDOM.render( /*#__PURE__*/React.createElement(CartFunctionality, null), document.getElementById("root"));
