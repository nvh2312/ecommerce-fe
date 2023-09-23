$(document).ready(function () {
  const rangeInput = $(".range-input input"),
    range = $(".range-slide .progress");
  let priceGap = 700;
  let text_arrange = $(".price-arrange .text-normal");

  $.each(rangeInput, function (index, input) {
    $(input).on("input", function (e) {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        text_arrange.html(`Price: &nbsp;$${minVal.toLocaleString()}&nbsp;&nbsp;-&nbsp;&nbsp;$${maxVal.toLocaleString()}`)
        range.css("left", (minVal / rangeInput[0].max) * 100 + "%");
        range.css("right", 100 - (maxVal / rangeInput[1].max) * 100 + "%");
      }
    });
  });
});
