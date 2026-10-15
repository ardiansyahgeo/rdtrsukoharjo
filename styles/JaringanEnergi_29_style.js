var size = 0;
var placement = 'point';
function categories_JaringanEnergi_29(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Saluran Udara Tegangan Ekstra Tinggi (SUTET)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,96,37,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Saluran Udara Tegangan Tinggi (SUTT)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(120,230,18,1.0)', lineDash: [12.16,6.08], lineCap: 'square', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Saluran Udara Tegangan Menengah (SUTM)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(99,214,180,1.0)', lineDash: [7.6,3.8], lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Saluran Udara Tegangan Rendah (SUTR)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(209,19,187,1.0)', lineDash: [3.952,1.976], lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_JaringanEnergi_29 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAMOBJ");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_JaringanEnergi_29(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
