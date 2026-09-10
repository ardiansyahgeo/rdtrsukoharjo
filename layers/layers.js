var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_CITRAGOOGLE_1 = new ol.layer.Tile({
            'title': 'CITRA GOOGLE',
            //'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_POLARUANG_WP_SUKARJO_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "POLARUANG_WP_SUKARJO",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/POLARUANG_WP_SUKARJO_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12331626.685817, -861652.897768, 12342641.081514, -852192.376852]
                            })
                        });
var lyr_WP_NGUTER_BONDOSARI_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "WP_NGUTER_BONDOSARI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WP_NGUTER_BONDOSARI_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12335824.685284, -868775.831627, 12351392.668370, -852958.772859]
                            })
                        });
var lyr_POLARUANG_WP_KARTASURA_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "POLARUANG_WP_KARTASURA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/POLARUANG_WP_KARTASURA_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12324341.921874, -846351.238003, 12332445.980804, -841562.960273]
                            })
                        });
var lyr_POLARUANG_WP_GROGOL_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "POLARUANG_WP_GROGOL",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/POLARUANG_WP_GROGOL_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12332379.635213, -854236.173663, 12340060.680078, -845279.536313]
                            })
                        });
var format_LCTAHUN2040PREDIKSI_6 = new ol.format.GeoJSON();
var features_LCTAHUN2040PREDIKSI_6 = format_LCTAHUN2040PREDIKSI_6.readFeatures(json_LCTAHUN2040PREDIKSI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LCTAHUN2040PREDIKSI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LCTAHUN2040PREDIKSI_6.addFeatures(features_LCTAHUN2040PREDIKSI_6);
var lyr_LCTAHUN2040PREDIKSI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LCTAHUN2040PREDIKSI_6, 
                style: style_LCTAHUN2040PREDIKSI_6,
                popuplayertitle: "LC TAHUN 2040 (PREDIKSI)",
                interactive: true,
    title: 'LC TAHUN 2040 (PREDIKSI)<br />\
    <img src="styles/legend/LCTAHUN2040PREDIKSI_6_0.png" /> BADAN AIR<br />\
    <img src="styles/legend/LCTAHUN2040PREDIKSI_6_1.png" /> INDUSTRI<br />\
    <img src="styles/legend/LCTAHUN2040PREDIKSI_6_2.png" /> KAWASAN HUTAN<br />\
    <img src="styles/legend/LCTAHUN2040PREDIKSI_6_3.png" /> KEBUN<br />\
    <img src="styles/legend/LCTAHUN2040PREDIKSI_6_4.png" /> PEMUKIMAN<br />\
    <img src="styles/legend/LCTAHUN2040PREDIKSI_6_5.png" /> RUMPUT<br />\
    <img src="styles/legend/LCTAHUN2040PREDIKSI_6_6.png" /> SAWAH<br />\
    <img src="styles/legend/LCTAHUN2040PREDIKSI_6_7.png" /> SEMAK BELUKAR<br />\
    <img src="styles/legend/LCTAHUN2040PREDIKSI_6_8.png" /> TEGALAN<br />\
    <img src="styles/legend/LCTAHUN2040PREDIKSI_6_9.png" /> TANAH BERBATU<br />'
        });
var format_LCTAHUN2030PREDIKSI_7 = new ol.format.GeoJSON();
var features_LCTAHUN2030PREDIKSI_7 = format_LCTAHUN2030PREDIKSI_7.readFeatures(json_LCTAHUN2030PREDIKSI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LCTAHUN2030PREDIKSI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LCTAHUN2030PREDIKSI_7.addFeatures(features_LCTAHUN2030PREDIKSI_7);
var lyr_LCTAHUN2030PREDIKSI_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LCTAHUN2030PREDIKSI_7, 
                style: style_LCTAHUN2030PREDIKSI_7,
                popuplayertitle: "LC TAHUN 2030 (PREDIKSI)",
                interactive: true,
    title: 'LC TAHUN 2030 (PREDIKSI)<br />\
    <img src="styles/legend/LCTAHUN2030PREDIKSI_7_0.png" /> BADAN AIR<br />\
    <img src="styles/legend/LCTAHUN2030PREDIKSI_7_1.png" /> INDUSTRI<br />\
    <img src="styles/legend/LCTAHUN2030PREDIKSI_7_2.png" /> KAWASAN HUTAN<br />\
    <img src="styles/legend/LCTAHUN2030PREDIKSI_7_3.png" /> KEBUN<br />\
    <img src="styles/legend/LCTAHUN2030PREDIKSI_7_4.png" /> PEMUKIMAN<br />\
    <img src="styles/legend/LCTAHUN2030PREDIKSI_7_5.png" /> RUMPUT<br />\
    <img src="styles/legend/LCTAHUN2030PREDIKSI_7_6.png" /> SAWAH<br />\
    <img src="styles/legend/LCTAHUN2030PREDIKSI_7_7.png" /> SEMAK BELUKAR<br />\
    <img src="styles/legend/LCTAHUN2030PREDIKSI_7_8.png" /> TEGALAN<br />\
    <img src="styles/legend/LCTAHUN2030PREDIKSI_7_9.png" /> TANAH BERBATU<br />'
        });
var format_LCTAHUN2020_8 = new ol.format.GeoJSON();
var features_LCTAHUN2020_8 = format_LCTAHUN2020_8.readFeatures(json_LCTAHUN2020_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LCTAHUN2020_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LCTAHUN2020_8.addFeatures(features_LCTAHUN2020_8);
var lyr_LCTAHUN2020_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LCTAHUN2020_8, 
                style: style_LCTAHUN2020_8,
                popuplayertitle: "LC TAHUN 2020",
                interactive: true,
    title: 'LC TAHUN 2020<br />\
    <img src="styles/legend/LCTAHUN2020_8_0.png" /> BADAN AIR<br />\
    <img src="styles/legend/LCTAHUN2020_8_1.png" /> INDUSTRI<br />\
    <img src="styles/legend/LCTAHUN2020_8_2.png" /> KAWASAN HUTAN<br />\
    <img src="styles/legend/LCTAHUN2020_8_3.png" /> KEBUN<br />\
    <img src="styles/legend/LCTAHUN2020_8_4.png" /> PEMUKIMAN<br />\
    <img src="styles/legend/LCTAHUN2020_8_5.png" /> RUMPUT<br />\
    <img src="styles/legend/LCTAHUN2020_8_6.png" /> SAWAH<br />\
    <img src="styles/legend/LCTAHUN2020_8_7.png" /> SEMAK BELUKAR<br />\
    <img src="styles/legend/LCTAHUN2020_8_8.png" /> TEGALAN<br />\
    <img src="styles/legend/LCTAHUN2020_8_9.png" /> TANAH BERBATU<br />'
        });
var format_LCTAHUN2000_9 = new ol.format.GeoJSON();
var features_LCTAHUN2000_9 = format_LCTAHUN2000_9.readFeatures(json_LCTAHUN2000_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LCTAHUN2000_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LCTAHUN2000_9.addFeatures(features_LCTAHUN2000_9);
var lyr_LCTAHUN2000_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LCTAHUN2000_9, 
                style: style_LCTAHUN2000_9,
                popuplayertitle: "LC TAHUN 2000",
                interactive: true,
    title: 'LC TAHUN 2000<br />\
    <img src="styles/legend/LCTAHUN2000_9_0.png" /> BADAN AIR<br />\
    <img src="styles/legend/LCTAHUN2000_9_1.png" /> INDUSTRI<br />\
    <img src="styles/legend/LCTAHUN2000_9_2.png" /> KAWASAN HUTAN<br />\
    <img src="styles/legend/LCTAHUN2000_9_3.png" /> KEBUN<br />\
    <img src="styles/legend/LCTAHUN2000_9_4.png" /> PEMUKIMAN<br />\
    <img src="styles/legend/LCTAHUN2000_9_5.png" /> RUMPUT<br />\
    <img src="styles/legend/LCTAHUN2000_9_6.png" /> SAWAH<br />\
    <img src="styles/legend/LCTAHUN2000_9_7.png" /> SEMAK BELUKAR<br />\
    <img src="styles/legend/LCTAHUN2000_9_8.png" /> TEGALAN<br />\
    <img src="styles/legend/LCTAHUN2000_9_9.png" /> TANAH BERBATU<br />'
        });
var format_RawanKekeringan_10 = new ol.format.GeoJSON();
var features_RawanKekeringan_10 = format_RawanKekeringan_10.readFeatures(json_RawanKekeringan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanKekeringan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanKekeringan_10.addFeatures(features_RawanKekeringan_10);
var lyr_RawanKekeringan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanKekeringan_10, 
                style: style_RawanKekeringan_10,
                popuplayertitle: "Rawan Kekeringan",
                interactive: true,
    title: 'Rawan Kekeringan<br />\
    <img src="styles/legend/RawanKekeringan_10_0.png" /> Rawan Rendah<br />\
    <img src="styles/legend/RawanKekeringan_10_1.png" /> Rawan Sedang<br />\
    <img src="styles/legend/RawanKekeringan_10_2.png" /> Rawan Tinggi<br />'
        });
var format_RawanKarhutla_11 = new ol.format.GeoJSON();
var features_RawanKarhutla_11 = format_RawanKarhutla_11.readFeatures(json_RawanKarhutla_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanKarhutla_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanKarhutla_11.addFeatures(features_RawanKarhutla_11);
var lyr_RawanKarhutla_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanKarhutla_11, 
                style: style_RawanKarhutla_11,
                popuplayertitle: "Rawan Karhutla",
                interactive: true,
    title: 'Rawan Karhutla<br />\
    <img src="styles/legend/RawanKarhutla_11_0.png" /> Rawan Rendah<br />\
    <img src="styles/legend/RawanKarhutla_11_1.png" /> Rawan Sedang<br />\
    <img src="styles/legend/RawanKarhutla_11_2.png" /> Rawan Tinggi<br />'
        });
var format_RawanLongsor_12 = new ol.format.GeoJSON();
var features_RawanLongsor_12 = format_RawanLongsor_12.readFeatures(json_RawanLongsor_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanLongsor_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanLongsor_12.addFeatures(features_RawanLongsor_12);
var lyr_RawanLongsor_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanLongsor_12, 
                style: style_RawanLongsor_12,
                popuplayertitle: "Rawan Longsor",
                interactive: true,
    title: 'Rawan Longsor<br />\
    <img src="styles/legend/RawanLongsor_12_0.png" /> Rawan Rendah<br />\
    <img src="styles/legend/RawanLongsor_12_1.png" /> Rawan Sedang<br />\
    <img src="styles/legend/RawanLongsor_12_2.png" /> Rawan Tinggi<br />'
        });
var format_RawanGempa_13 = new ol.format.GeoJSON();
var features_RawanGempa_13 = format_RawanGempa_13.readFeatures(json_RawanGempa_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanGempa_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanGempa_13.addFeatures(features_RawanGempa_13);
var lyr_RawanGempa_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanGempa_13, 
                style: style_RawanGempa_13,
                popuplayertitle: "Rawan Gempa",
                interactive: true,
    title: 'Rawan Gempa<br />\
    <img src="styles/legend/RawanGempa_13_0.png" /> Rawan Rendah<br />\
    <img src="styles/legend/RawanGempa_13_1.png" /> Rawan Sedang<br />\
    <img src="styles/legend/RawanGempa_13_2.png" /> Rawan Tinggi<br />'
        });
var format_RawanLikuifaksi_14 = new ol.format.GeoJSON();
var features_RawanLikuifaksi_14 = format_RawanLikuifaksi_14.readFeatures(json_RawanLikuifaksi_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanLikuifaksi_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanLikuifaksi_14.addFeatures(features_RawanLikuifaksi_14);
var lyr_RawanLikuifaksi_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanLikuifaksi_14, 
                style: style_RawanLikuifaksi_14,
                popuplayertitle: "Rawan Likuifaksi",
                interactive: true,
    title: 'Rawan Likuifaksi<br />\
    <img src="styles/legend/RawanLikuifaksi_14_0.png" /> Rawan Rendah<br />\
    <img src="styles/legend/RawanLikuifaksi_14_1.png" /> Rawan Sedang<br />\
    <img src="styles/legend/RawanLikuifaksi_14_2.png" /> Rawan Tinggi<br />'
        });
var format_RawanCuacaEkstrimcopy_15 = new ol.format.GeoJSON();
var features_RawanCuacaEkstrimcopy_15 = format_RawanCuacaEkstrimcopy_15.readFeatures(json_RawanCuacaEkstrimcopy_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanCuacaEkstrimcopy_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanCuacaEkstrimcopy_15.addFeatures(features_RawanCuacaEkstrimcopy_15);
var lyr_RawanCuacaEkstrimcopy_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanCuacaEkstrimcopy_15, 
                style: style_RawanCuacaEkstrimcopy_15,
                popuplayertitle: "Rawan Cuaca Ekstrim copy",
                interactive: true,
    title: 'Rawan Cuaca Ekstrim copy<br />\
    <img src="styles/legend/RawanCuacaEkstrimcopy_15_0.png" /> Rawan Rendah<br />\
    <img src="styles/legend/RawanCuacaEkstrimcopy_15_1.png" /> Rawan Sedang<br />\
    <img src="styles/legend/RawanCuacaEkstrimcopy_15_2.png" /> Rawan Tinggi<br />'
        });
var format_RawanBanjir_16 = new ol.format.GeoJSON();
var features_RawanBanjir_16 = format_RawanBanjir_16.readFeatures(json_RawanBanjir_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanBanjir_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanBanjir_16.addFeatures(features_RawanBanjir_16);
var lyr_RawanBanjir_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanBanjir_16, 
                style: style_RawanBanjir_16,
                popuplayertitle: "Rawan Banjir",
                interactive: true,
    title: 'Rawan Banjir<br />\
    <img src="styles/legend/RawanBanjir_16_0.png" /> Rawan Rendah<br />\
    <img src="styles/legend/RawanBanjir_16_1.png" /> Rawan Sedang<br />\
    <img src="styles/legend/RawanBanjir_16_2.png" /> Rawan Tinggi<br />'
        });
var format_LahanBakuSawahATRBPN2024_17 = new ol.format.GeoJSON();
var features_LahanBakuSawahATRBPN2024_17 = format_LahanBakuSawahATRBPN2024_17.readFeatures(json_LahanBakuSawahATRBPN2024_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahanBakuSawahATRBPN2024_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanBakuSawahATRBPN2024_17.addFeatures(features_LahanBakuSawahATRBPN2024_17);
var lyr_LahanBakuSawahATRBPN2024_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahanBakuSawahATRBPN2024_17, 
                style: style_LahanBakuSawahATRBPN2024_17,
                popuplayertitle: "Lahan Baku Sawah ATR BPN 2024",
                interactive: true,
                title: '<img src="styles/legend/LahanBakuSawahATRBPN2024_17.png" /> Lahan Baku Sawah ATR BPN 2024'
            });
var format_batasdesakelurahan_18 = new ol.format.GeoJSON();
var features_batasdesakelurahan_18 = format_batasdesakelurahan_18.readFeatures(json_batasdesakelurahan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasdesakelurahan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasdesakelurahan_18.addFeatures(features_batasdesakelurahan_18);
var lyr_batasdesakelurahan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasdesakelurahan_18, 
                style: style_batasdesakelurahan_18,
                popuplayertitle: "batas desa/kelurahan",
                interactive: true,
                title: '<img src="styles/legend/batasdesakelurahan_18.png" /> batas desa/kelurahan'
            });
var format_bataskecamatan_19 = new ol.format.GeoJSON();
var features_bataskecamatan_19 = format_bataskecamatan_19.readFeatures(json_bataskecamatan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataskecamatan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataskecamatan_19.addFeatures(features_bataskecamatan_19);
var lyr_bataskecamatan_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataskecamatan_19, 
                style: style_bataskecamatan_19,
                popuplayertitle: "batas kecamatan",
                interactive: true,
                title: '<img src="styles/legend/bataskecamatan_19.png" /> batas kecamatan'
            });
var group_RAWANBENCANAINARISKBNPB = new ol.layer.Group({
                                layers: [lyr_RawanKekeringan_10,lyr_RawanKarhutla_11,lyr_RawanLongsor_12,lyr_RawanGempa_13,lyr_RawanLikuifaksi_14,lyr_RawanCuacaEkstrimcopy_15,lyr_RawanBanjir_16,],
                                fold: "close",
                                title: "RAWAN BENCANA INARISK BNPB"});
var group_LCTIMESERIESDANANALISISCA = new ol.layer.Group({
                                layers: [lyr_LCTAHUN2040PREDIKSI_6,lyr_LCTAHUN2030PREDIKSI_7,lyr_LCTAHUN2020_8,lyr_LCTAHUN2000_9,],
                                fold: "close",
                                title: " LC TIMESERIES DAN ANALISIS CA"});
var group_RDTRYANGSUDAHPERDA = new ol.layer.Group({
                                layers: [lyr_POLARUANG_WP_SUKARJO_2,lyr_WP_NGUTER_BONDOSARI_3,lyr_POLARUANG_WP_KARTASURA_4,lyr_POLARUANG_WP_GROGOL_5,],
                                fold: "close",
                                title: "RDTR YANG SUDAH PERDA"});

lyr_OpenStreetMap_0.setVisible(true);lyr_CITRAGOOGLE_1.setVisible(true);lyr_POLARUANG_WP_SUKARJO_2.setVisible(false);lyr_WP_NGUTER_BONDOSARI_3.setVisible(false);lyr_POLARUANG_WP_KARTASURA_4.setVisible(false);lyr_POLARUANG_WP_GROGOL_5.setVisible(false);lyr_LCTAHUN2040PREDIKSI_6.setVisible(false);lyr_LCTAHUN2030PREDIKSI_7.setVisible(false);lyr_LCTAHUN2020_8.setVisible(false);lyr_LCTAHUN2000_9.setVisible(false);lyr_RawanKekeringan_10.setVisible(false);lyr_RawanKarhutla_11.setVisible(false);lyr_RawanLongsor_12.setVisible(false);lyr_RawanGempa_13.setVisible(false);lyr_RawanLikuifaksi_14.setVisible(false);lyr_RawanCuacaEkstrimcopy_15.setVisible(false);lyr_RawanBanjir_16.setVisible(false);lyr_LahanBakuSawahATRBPN2024_17.setVisible(false);lyr_batasdesakelurahan_18.setVisible(true);lyr_bataskecamatan_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CITRAGOOGLE_1,group_RDTRYANGSUDAHPERDA,group_LCTIMESERIESDANANALISISCA,group_RAWANBENCANAINARISKBNPB,lyr_LahanBakuSawahATRBPN2024_17,lyr_batasdesakelurahan_18,lyr_bataskecamatan_19];
lyr_LCTAHUN2040PREDIKSI_6.set('fieldAliases', {'lc_00': 'lc_00', 'lc_20': 'lc_20', 'lc_30': 'lc_30', 'lc_40': 'lc_40', 'lc_50': 'lc_50', });
lyr_LCTAHUN2030PREDIKSI_7.set('fieldAliases', {'lc_00': 'lc_00', 'lc_20': 'lc_20', 'lc_30': 'lc_30', 'lc_40': 'lc_40', 'lc_50': 'lc_50', });
lyr_LCTAHUN2020_8.set('fieldAliases', {'lc_00': 'lc_00', 'lc_20': 'lc_20', 'lc_30': 'lc_30', 'lc_40': 'lc_40', 'lc_50': 'lc_50', });
lyr_LCTAHUN2000_9.set('fieldAliases', {'lc_00': 'lc_00', 'lc_20': 'lc_20', 'lc_30': 'lc_30', 'lc_40': 'lc_40', 'lc_50': 'lc_50', });
lyr_RawanKekeringan_10.set('fieldAliases', {'R_BANJIR': 'R_BANJIR', 'R_CUAEKSTR': 'R_CUAEKSTR', 'R_LIKUIFAK': 'R_LIKUIFAK', 'R_GEMPA': 'R_GEMPA', 'R_LONGSOR': 'R_LONGSOR', 'R_KARHUTLA': 'R_KARHUTLA', 'R_KERINGN': 'R_KERINGN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RawanKarhutla_11.set('fieldAliases', {'R_BANJIR': 'R_BANJIR', 'R_CUAEKSTR': 'R_CUAEKSTR', 'R_LIKUIFAK': 'R_LIKUIFAK', 'R_GEMPA': 'R_GEMPA', 'R_LONGSOR': 'R_LONGSOR', 'R_KARHUTLA': 'R_KARHUTLA', 'R_KERINGN': 'R_KERINGN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RawanLongsor_12.set('fieldAliases', {'R_BANJIR': 'R_BANJIR', 'R_CUAEKSTR': 'R_CUAEKSTR', 'R_LIKUIFAK': 'R_LIKUIFAK', 'R_GEMPA': 'R_GEMPA', 'R_LONGSOR': 'R_LONGSOR', 'R_KARHUTLA': 'R_KARHUTLA', 'R_KERINGN': 'R_KERINGN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RawanGempa_13.set('fieldAliases', {'R_BANJIR': 'R_BANJIR', 'R_CUAEKSTR': 'R_CUAEKSTR', 'R_LIKUIFAK': 'R_LIKUIFAK', 'R_GEMPA': 'R_GEMPA', 'R_LONGSOR': 'R_LONGSOR', 'R_KARHUTLA': 'R_KARHUTLA', 'R_KERINGN': 'R_KERINGN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RawanLikuifaksi_14.set('fieldAliases', {'R_BANJIR': 'R_BANJIR', 'R_CUAEKSTR': 'R_CUAEKSTR', 'R_LIKUIFAK': 'R_LIKUIFAK', 'R_GEMPA': 'R_GEMPA', 'R_LONGSOR': 'R_LONGSOR', 'R_KARHUTLA': 'R_KARHUTLA', 'R_KERINGN': 'R_KERINGN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RawanCuacaEkstrimcopy_15.set('fieldAliases', {'R_BANJIR': 'R_BANJIR', 'R_CUAEKSTR': 'R_CUAEKSTR', 'R_LIKUIFAK': 'R_LIKUIFAK', 'R_GEMPA': 'R_GEMPA', 'R_LONGSOR': 'R_LONGSOR', 'R_KARHUTLA': 'R_KARHUTLA', 'R_KERINGN': 'R_KERINGN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RawanBanjir_16.set('fieldAliases', {'R_BANJIR': 'R_BANJIR', 'R_CUAEKSTR': 'R_CUAEKSTR', 'R_LIKUIFAK': 'R_LIKUIFAK', 'R_GEMPA': 'R_GEMPA', 'R_LONGSOR': 'R_LONGSOR', 'R_KARHUTLA': 'R_KARHUTLA', 'R_KERINGN': 'R_KERINGN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LahanBakuSawahATRBPN2024_17.set('fieldAliases', {'WADMPR': 'WADMPR', 'KDPPUM': 'KDPPUM', 'WADMKK': 'WADMKK', 'KDPKAB': 'KDPKAB', 'QNAME23': 'QNAME23', 'JSWH': 'JSWH', 'CTKSWH': 'CTKSWH', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_batasdesakelurahan_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_bataskecamatan_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LCTAHUN2040PREDIKSI_6.set('fieldImages', {'lc_00': 'TextEdit', 'lc_20': 'TextEdit', 'lc_30': 'TextEdit', 'lc_40': 'TextEdit', 'lc_50': 'TextEdit', });
lyr_LCTAHUN2030PREDIKSI_7.set('fieldImages', {'lc_00': 'TextEdit', 'lc_20': 'TextEdit', 'lc_30': 'TextEdit', 'lc_40': 'TextEdit', 'lc_50': 'TextEdit', });
lyr_LCTAHUN2020_8.set('fieldImages', {'lc_00': 'TextEdit', 'lc_20': 'TextEdit', 'lc_30': 'TextEdit', 'lc_40': 'TextEdit', 'lc_50': 'TextEdit', });
lyr_LCTAHUN2000_9.set('fieldImages', {'lc_00': 'TextEdit', 'lc_20': 'TextEdit', 'lc_30': 'TextEdit', 'lc_40': 'TextEdit', 'lc_50': 'TextEdit', });
lyr_RawanKekeringan_10.set('fieldImages', {'R_BANJIR': 'TextEdit', 'R_CUAEKSTR': 'TextEdit', 'R_LIKUIFAK': 'TextEdit', 'R_GEMPA': 'TextEdit', 'R_LONGSOR': 'TextEdit', 'R_KARHUTLA': 'TextEdit', 'R_KERINGN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RawanKarhutla_11.set('fieldImages', {'R_BANJIR': 'TextEdit', 'R_CUAEKSTR': 'TextEdit', 'R_LIKUIFAK': 'TextEdit', 'R_GEMPA': 'TextEdit', 'R_LONGSOR': 'TextEdit', 'R_KARHUTLA': 'TextEdit', 'R_KERINGN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RawanLongsor_12.set('fieldImages', {'R_BANJIR': 'TextEdit', 'R_CUAEKSTR': 'TextEdit', 'R_LIKUIFAK': 'TextEdit', 'R_GEMPA': 'TextEdit', 'R_LONGSOR': 'TextEdit', 'R_KARHUTLA': 'TextEdit', 'R_KERINGN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RawanGempa_13.set('fieldImages', {'R_BANJIR': 'TextEdit', 'R_CUAEKSTR': 'TextEdit', 'R_LIKUIFAK': 'TextEdit', 'R_GEMPA': 'TextEdit', 'R_LONGSOR': 'TextEdit', 'R_KARHUTLA': 'TextEdit', 'R_KERINGN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RawanLikuifaksi_14.set('fieldImages', {'R_BANJIR': 'TextEdit', 'R_CUAEKSTR': 'TextEdit', 'R_LIKUIFAK': 'TextEdit', 'R_GEMPA': 'TextEdit', 'R_LONGSOR': 'TextEdit', 'R_KARHUTLA': 'TextEdit', 'R_KERINGN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RawanCuacaEkstrimcopy_15.set('fieldImages', {'R_BANJIR': 'TextEdit', 'R_CUAEKSTR': 'TextEdit', 'R_LIKUIFAK': 'TextEdit', 'R_GEMPA': 'TextEdit', 'R_LONGSOR': 'TextEdit', 'R_KARHUTLA': 'TextEdit', 'R_KERINGN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RawanBanjir_16.set('fieldImages', {'R_BANJIR': 'TextEdit', 'R_CUAEKSTR': 'TextEdit', 'R_LIKUIFAK': 'TextEdit', 'R_GEMPA': 'TextEdit', 'R_LONGSOR': 'TextEdit', 'R_KARHUTLA': 'TextEdit', 'R_KERINGN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LahanBakuSawahATRBPN2024_17.set('fieldImages', {'WADMPR': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKK': 'TextEdit', 'KDPKAB': 'TextEdit', 'QNAME23': 'TextEdit', 'JSWH': 'TextEdit', 'CTKSWH': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_batasdesakelurahan_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_bataskecamatan_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LCTAHUN2040PREDIKSI_6.set('fieldLabels', {'lc_00': 'inline label - visible with data', 'lc_20': 'inline label - always visible', 'lc_30': 'inline label - always visible', 'lc_40': 'inline label - always visible', 'lc_50': 'inline label - always visible', });
lyr_LCTAHUN2030PREDIKSI_7.set('fieldLabels', {'lc_00': 'inline label - visible with data', 'lc_20': 'inline label - always visible', 'lc_30': 'inline label - always visible', 'lc_40': 'inline label - always visible', 'lc_50': 'inline label - always visible', });
lyr_LCTAHUN2020_8.set('fieldLabels', {'lc_00': 'inline label - always visible', 'lc_20': 'inline label - always visible', 'lc_30': 'inline label - always visible', 'lc_40': 'inline label - always visible', 'lc_50': 'inline label - always visible', });
lyr_LCTAHUN2000_9.set('fieldLabels', {'lc_00': 'inline label - visible with data', 'lc_20': 'inline label - always visible', 'lc_30': 'inline label - always visible', 'lc_40': 'inline label - always visible', 'lc_50': 'inline label - always visible', });
lyr_RawanKekeringan_10.set('fieldLabels', {'R_BANJIR': 'inline label - always visible', 'R_CUAEKSTR': 'inline label - always visible', 'R_LIKUIFAK': 'inline label - always visible', 'R_GEMPA': 'inline label - always visible', 'R_LONGSOR': 'inline label - always visible', 'R_KARHUTLA': 'inline label - always visible', 'R_KERINGN': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_RawanKarhutla_11.set('fieldLabels', {'R_BANJIR': 'inline label - always visible', 'R_CUAEKSTR': 'inline label - always visible', 'R_LIKUIFAK': 'inline label - always visible', 'R_GEMPA': 'inline label - always visible', 'R_LONGSOR': 'inline label - always visible', 'R_KARHUTLA': 'inline label - always visible', 'R_KERINGN': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_RawanLongsor_12.set('fieldLabels', {'R_BANJIR': 'inline label - always visible', 'R_CUAEKSTR': 'inline label - always visible', 'R_LIKUIFAK': 'inline label - always visible', 'R_GEMPA': 'inline label - always visible', 'R_LONGSOR': 'inline label - always visible', 'R_KARHUTLA': 'inline label - always visible', 'R_KERINGN': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_RawanGempa_13.set('fieldLabels', {'R_BANJIR': 'inline label - always visible', 'R_CUAEKSTR': 'inline label - always visible', 'R_LIKUIFAK': 'inline label - always visible', 'R_GEMPA': 'inline label - always visible', 'R_LONGSOR': 'inline label - always visible', 'R_KARHUTLA': 'inline label - always visible', 'R_KERINGN': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_RawanLikuifaksi_14.set('fieldLabels', {'R_BANJIR': 'inline label - always visible', 'R_CUAEKSTR': 'inline label - always visible', 'R_LIKUIFAK': 'inline label - always visible', 'R_GEMPA': 'inline label - always visible', 'R_LONGSOR': 'inline label - always visible', 'R_KARHUTLA': 'inline label - always visible', 'R_KERINGN': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_RawanCuacaEkstrimcopy_15.set('fieldLabels', {'R_BANJIR': 'inline label - always visible', 'R_CUAEKSTR': 'inline label - always visible', 'R_LIKUIFAK': 'inline label - always visible', 'R_GEMPA': 'inline label - always visible', 'R_LONGSOR': 'inline label - always visible', 'R_KARHUTLA': 'inline label - always visible', 'R_KERINGN': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_RawanBanjir_16.set('fieldLabels', {'R_BANJIR': 'inline label - always visible', 'R_CUAEKSTR': 'inline label - always visible', 'R_LIKUIFAK': 'inline label - always visible', 'R_GEMPA': 'inline label - always visible', 'R_LONGSOR': 'inline label - always visible', 'R_KARHUTLA': 'inline label - always visible', 'R_KERINGN': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_LahanBakuSawahATRBPN2024_17.set('fieldLabels', {'WADMPR': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'KDPKAB': 'inline label - always visible', 'QNAME23': 'inline label - always visible', 'JSWH': 'inline label - always visible', 'CTKSWH': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_batasdesakelurahan_18.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDCBPS': 'inline label - visible with data', 'KDCPUM': 'inline label - always visible', 'KDEBPS': 'inline label - visible with data', 'KDEPUM': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'KDPKAB': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_bataskecamatan_19.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_bataskecamatan_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});