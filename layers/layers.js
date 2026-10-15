var wms_layers = [];


        var lyr_googlemaps_0 = new ol.layer.Tile({
            'title': 'googlemaps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
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
var format_bataskecamatan_17 = new ol.format.GeoJSON();
var features_bataskecamatan_17 = format_bataskecamatan_17.readFeatures(json_bataskecamatan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataskecamatan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataskecamatan_17.addFeatures(features_bataskecamatan_17);
var lyr_bataskecamatan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataskecamatan_17, 
                style: style_bataskecamatan_17,
                popuplayertitle: "batas kecamatan",
                interactive: true,
                title: '<img src="styles/legend/bataskecamatan_17.png" /> batas kecamatan'
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
var format_LSD2021KabupatenSukoharjo_19 = new ol.format.GeoJSON();
var features_LSD2021KabupatenSukoharjo_19 = format_LSD2021KabupatenSukoharjo_19.readFeatures(json_LSD2021KabupatenSukoharjo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSD2021KabupatenSukoharjo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSD2021KabupatenSukoharjo_19.addFeatures(features_LSD2021KabupatenSukoharjo_19);
var lyr_LSD2021KabupatenSukoharjo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSD2021KabupatenSukoharjo_19, 
                style: style_LSD2021KabupatenSukoharjo_19,
                popuplayertitle: "LSD 2021 Kabupaten Sukoharjo",
                interactive: true,
                title: '<img src="styles/legend/LSD2021KabupatenSukoharjo_19.png" /> LSD 2021 Kabupaten Sukoharjo'
            });
var format_LBS2025KabupatenSukoharjo_20 = new ol.format.GeoJSON();
var features_LBS2025KabupatenSukoharjo_20 = format_LBS2025KabupatenSukoharjo_20.readFeatures(json_LBS2025KabupatenSukoharjo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBS2025KabupatenSukoharjo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBS2025KabupatenSukoharjo_20.addFeatures(features_LBS2025KabupatenSukoharjo_20);
var lyr_LBS2025KabupatenSukoharjo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LBS2025KabupatenSukoharjo_20, 
                style: style_LBS2025KabupatenSukoharjo_20,
                popuplayertitle: "LBS 2025 Kabupaten Sukoharjo",
                interactive: true,
                title: '<img src="styles/legend/LBS2025KabupatenSukoharjo_20.png" /> LBS 2025 Kabupaten Sukoharjo'
            });
var format_WPKecamatanMojolaban_21 = new ol.format.GeoJSON();
var features_WPKecamatanMojolaban_21 = format_WPKecamatanMojolaban_21.readFeatures(json_WPKecamatanMojolaban_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WPKecamatanMojolaban_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WPKecamatanMojolaban_21.addFeatures(features_WPKecamatanMojolaban_21);
var lyr_WPKecamatanMojolaban_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WPKecamatanMojolaban_21, 
                style: style_WPKecamatanMojolaban_21,
                popuplayertitle: "WP Kecamatan Mojolaban",
                interactive: true,
                title: '<img src="styles/legend/WPKecamatanMojolaban_21.png" /> WP Kecamatan Mojolaban'
            });
var format_WPKecamatanGatak_22 = new ol.format.GeoJSON();
var features_WPKecamatanGatak_22 = format_WPKecamatanGatak_22.readFeatures(json_WPKecamatanGatak_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WPKecamatanGatak_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WPKecamatanGatak_22.addFeatures(features_WPKecamatanGatak_22);
var lyr_WPKecamatanGatak_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WPKecamatanGatak_22, 
                style: style_WPKecamatanGatak_22,
                popuplayertitle: "WP Kecamatan Gatak",
                interactive: true,
                title: '<img src="styles/legend/WPKecamatanGatak_22.png" /> WP Kecamatan Gatak'
            });
var format_WPKecamatanBaki_23 = new ol.format.GeoJSON();
var features_WPKecamatanBaki_23 = format_WPKecamatanBaki_23.readFeatures(json_WPKecamatanBaki_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WPKecamatanBaki_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WPKecamatanBaki_23.addFeatures(features_WPKecamatanBaki_23);
var lyr_WPKecamatanBaki_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WPKecamatanBaki_23, 
                style: style_WPKecamatanBaki_23,
                popuplayertitle: "WP Kecamatan Baki",
                interactive: true,
                title: '<img src="styles/legend/WPKecamatanBaki_23.png" /> WP Kecamatan Baki'
            });
var format_POLARUANGRTRWKABUPATENDRAFT2026_24 = new ol.format.GeoJSON();
var features_POLARUANGRTRWKABUPATENDRAFT2026_24 = format_POLARUANGRTRWKABUPATENDRAFT2026_24.readFeatures(json_POLARUANGRTRWKABUPATENDRAFT2026_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANGRTRWKABUPATENDRAFT2026_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANGRTRWKABUPATENDRAFT2026_24.addFeatures(features_POLARUANGRTRWKABUPATENDRAFT2026_24);
var lyr_POLARUANGRTRWKABUPATENDRAFT2026_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLARUANGRTRWKABUPATENDRAFT2026_24, 
                style: style_POLARUANGRTRWKABUPATENDRAFT2026_24,
                popuplayertitle: "POLA RUANG RTRW KABUPATEN (DRAFT 2026)",
                interactive: true,
    title: 'POLA RUANG RTRW KABUPATEN (DRAFT 2026)<br />\
    <img src="styles/legend/POLARUANGRTRWKABUPATENDRAFT2026_24_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANGRTRWKABUPATENDRAFT2026_24_1.png" /> Kawasan Perlindungan Setempat<br />\
    <img src="styles/legend/POLARUANGRTRWKABUPATENDRAFT2026_24_2.png" /> Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/POLARUANGRTRWKABUPATENDRAFT2026_24_3.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/POLARUANGRTRWKABUPATENDRAFT2026_24_4.png" /> Kawasan Permukiman Perkotaan<br />\
    <img src="styles/legend/POLARUANGRTRWKABUPATENDRAFT2026_24_5.png" /> Kawasan Pertahanan dan Keamanan<br />'
        });
var format_JaringanSumberDayaAir_25 = new ol.format.GeoJSON();
var features_JaringanSumberDayaAir_25 = format_JaringanSumberDayaAir_25.readFeatures(json_JaringanSumberDayaAir_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanSumberDayaAir_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanSumberDayaAir_25.addFeatures(features_JaringanSumberDayaAir_25);
var lyr_JaringanSumberDayaAir_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanSumberDayaAir_25, 
                style: style_JaringanSumberDayaAir_25,
                popuplayertitle: "Jaringan Sumber Daya Air",
                interactive: true,
    title: 'Jaringan Sumber Daya Air<br />\
    <img src="styles/legend/JaringanSumberDayaAir_25_0.png" /> Jaringan Irigasi Primer<br />\
    <img src="styles/legend/JaringanSumberDayaAir_25_1.png" /> Jaringan Irigasi Sekunder<br />\
    <img src="styles/legend/JaringanSumberDayaAir_25_2.png" /> Jaringan Irigasi Tersier<br />'
        });
var format_InfrastrukturSumberDayaAir_26 = new ol.format.GeoJSON();
var features_InfrastrukturSumberDayaAir_26 = format_InfrastrukturSumberDayaAir_26.readFeatures(json_InfrastrukturSumberDayaAir_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturSumberDayaAir_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturSumberDayaAir_26.addFeatures(features_InfrastrukturSumberDayaAir_26);
var lyr_InfrastrukturSumberDayaAir_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturSumberDayaAir_26, 
                style: style_InfrastrukturSumberDayaAir_26,
                popuplayertitle: "Infrastruktur Sumber Daya Air",
                interactive: true,
    title: 'Infrastruktur Sumber Daya Air<br />\
    <img src="styles/legend/InfrastrukturSumberDayaAir_26_0.png" /> Bangunan Pengendalian Banjir<br />\
    <img src="styles/legend/InfrastrukturSumberDayaAir_26_1.png" /> Bangunan Sumber Daya Air<br />'
        });
var format_JaringanTelekomunikasi_27 = new ol.format.GeoJSON();
var features_JaringanTelekomunikasi_27 = format_JaringanTelekomunikasi_27.readFeatures(json_JaringanTelekomunikasi_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanTelekomunikasi_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanTelekomunikasi_27.addFeatures(features_JaringanTelekomunikasi_27);
var lyr_JaringanTelekomunikasi_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanTelekomunikasi_27, 
                style: style_JaringanTelekomunikasi_27,
                popuplayertitle: "Jaringan Telekomunikasi",
                interactive: true,
    title: 'Jaringan Telekomunikasi<br />\
    <img src="styles/legend/JaringanTelekomunikasi_27_0.png" /> Jaringan Tetap<br />'
        });
var format_InfrastrukturTelekomunikasi_28 = new ol.format.GeoJSON();
var features_InfrastrukturTelekomunikasi_28 = format_InfrastrukturTelekomunikasi_28.readFeatures(json_InfrastrukturTelekomunikasi_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturTelekomunikasi_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturTelekomunikasi_28.addFeatures(features_InfrastrukturTelekomunikasi_28);
var lyr_InfrastrukturTelekomunikasi_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturTelekomunikasi_28, 
                style: style_InfrastrukturTelekomunikasi_28,
                popuplayertitle: "Infrastruktur Telekomunikasi",
                interactive: true,
    title: 'Infrastruktur Telekomunikasi<br />\
    <img src="styles/legend/InfrastrukturTelekomunikasi_28_0.png" /> Jaringan Bergerak Seluler<br />'
        });
var format_JaringanEnergi_29 = new ol.format.GeoJSON();
var features_JaringanEnergi_29 = format_JaringanEnergi_29.readFeatures(json_JaringanEnergi_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanEnergi_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanEnergi_29.addFeatures(features_JaringanEnergi_29);
var lyr_JaringanEnergi_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanEnergi_29, 
                style: style_JaringanEnergi_29,
                popuplayertitle: "Jaringan Energi",
                interactive: true,
    title: 'Jaringan Energi<br />\
    <img src="styles/legend/JaringanEnergi_29_0.png" /> Saluran Udara Tegangan Ekstra Tinggi (SUTET)<br />\
    <img src="styles/legend/JaringanEnergi_29_1.png" /> Saluran Udara Tegangan Tinggi (SUTT)<br />\
    <img src="styles/legend/JaringanEnergi_29_2.png" /> Saluran Udara Tegangan Menengah (SUTM)<br />\
    <img src="styles/legend/JaringanEnergi_29_3.png" /> Saluran Udara Tegangan Rendah (SUTR)<br />'
        });
var format_InfrastrukturEnergi_30 = new ol.format.GeoJSON();
var features_InfrastrukturEnergi_30 = format_InfrastrukturEnergi_30.readFeatures(json_InfrastrukturEnergi_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturEnergi_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturEnergi_30.addFeatures(features_InfrastrukturEnergi_30);
var lyr_InfrastrukturEnergi_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturEnergi_30, 
                style: style_InfrastrukturEnergi_30,
                popuplayertitle: "Infrastruktur Energi",
                interactive: true,
    title: 'Infrastruktur Energi<br />\
    <img src="styles/legend/InfrastrukturEnergi_30_0.png" /> Gardu Listrik<br />'
        });
var format_JaringanPrasaranalainnya_31 = new ol.format.GeoJSON();
var features_JaringanPrasaranalainnya_31 = format_JaringanPrasaranalainnya_31.readFeatures(json_JaringanPrasaranalainnya_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanPrasaranalainnya_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanPrasaranalainnya_31.addFeatures(features_JaringanPrasaranalainnya_31);
var lyr_JaringanPrasaranalainnya_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanPrasaranalainnya_31, 
                style: style_JaringanPrasaranalainnya_31,
                popuplayertitle: "Jaringan Prasarana lainnya",
                interactive: true,
    title: 'Jaringan Prasarana lainnya<br />\
    <img src="styles/legend/JaringanPrasaranalainnya_31_0.png" /> Jalur Evakuasi Bencana<br />\
    <img src="styles/legend/JaringanPrasaranalainnya_31_1.png" /> Jaringan Drainase Primer<br />\
    <img src="styles/legend/JaringanPrasaranalainnya_31_2.png" /> Jaringan Drainase Sekunder<br />\
    <img src="styles/legend/JaringanPrasaranalainnya_31_3.png" /> Jaringan Drainase Tersier<br />\
    <img src="styles/legend/JaringanPrasaranalainnya_31_4.png" /> Unit Distribusi<br />'
        });
var format_InfrastrukturPrasaranLainnya_32 = new ol.format.GeoJSON();
var features_InfrastrukturPrasaranLainnya_32 = format_InfrastrukturPrasaranLainnya_32.readFeatures(json_InfrastrukturPrasaranLainnya_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturPrasaranLainnya_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturPrasaranLainnya_32.addFeatures(features_InfrastrukturPrasaranLainnya_32);
var lyr_InfrastrukturPrasaranLainnya_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturPrasaranLainnya_32, 
                style: style_InfrastrukturPrasaranLainnya_32,
                popuplayertitle: "Infrastruktur Prasaran Lainnya",
                interactive: true,
    title: 'Infrastruktur Prasaran Lainnya<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_32_0.png" /> Bangunan Penangkap Mata Air<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_32_1.png" /> Infrastruktur Sistem Pengelolaan Air Limbah Domestik<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_32_2.png" /> Sistem Pengelolaan Limbah Bahan Berbahaya dan Beracun (B3)<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_32_3.png" /> Tempat Evakuasi Bencana<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_32_4.png" /> Tempat Pemrosesan Akhir (TPA)<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_32_5.png" /> Tempat Penampungan Sementara (TPS)<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_32_6.png" /> Tempat Pengelolaan Sampah Reuse, Reduce, Recycle (TPS3R)<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_32_7.png" /> Tempat Pengolahan Sampah Terpadu (TPST)<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_32_8.png" /> Unit Air Baku<br />\
    <img src="styles/legend/InfrastrukturPrasaranLainnya_32_9.png" /> Unit Produksi<br />'
        });
var format_JaringanTransportasi_33 = new ol.format.GeoJSON();
var features_JaringanTransportasi_33 = format_JaringanTransportasi_33.readFeatures(json_JaringanTransportasi_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanTransportasi_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanTransportasi_33.addFeatures(features_JaringanTransportasi_33);
var lyr_JaringanTransportasi_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanTransportasi_33, 
                style: style_JaringanTransportasi_33,
                popuplayertitle: "Jaringan Transportasi",
                interactive: true,
    title: 'Jaringan Transportasi<br />\
    <img src="styles/legend/JaringanTransportasi_33_0.png" /> Jalan Tol<br />\
    <img src="styles/legend/JaringanTransportasi_33_1.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/JaringanTransportasi_33_2.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/JaringanTransportasi_33_3.png" /> Jalan Kolektor Sekunder<br />\
    <img src="styles/legend/JaringanTransportasi_33_4.png" /> Jalan Lingkungan Primer<br />\
    <img src="styles/legend/JaringanTransportasi_33_5.png" /> Jalan Lokal Primer<br />\
    <img src="styles/legend/JaringanTransportasi_33_6.png" /> Jalan Lokal Sekunder<br />\
    <img src="styles/legend/JaringanTransportasi_33_7.png" /> Jaringan Jalur Kereta Api Antarkota<br />'
        });
var format_InfrastrukturTransportasi_34 = new ol.format.GeoJSON();
var features_InfrastrukturTransportasi_34 = format_InfrastrukturTransportasi_34.readFeatures(json_InfrastrukturTransportasi_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturTransportasi_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturTransportasi_34.addFeatures(features_InfrastrukturTransportasi_34);
var lyr_InfrastrukturTransportasi_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturTransportasi_34, 
                style: style_InfrastrukturTransportasi_34,
                popuplayertitle: "Infrastruktur Transportasi",
                interactive: true,
    title: 'Infrastruktur Transportasi<br />\
    <img src="styles/legend/InfrastrukturTransportasi_34_0.png" /> Jembatan<br />\
    <img src="styles/legend/InfrastrukturTransportasi_34_1.png" /> Stasiun Penumpang<br />\
    <img src="styles/legend/InfrastrukturTransportasi_34_2.png" /> Terminal Penumpang Tipe B<br />\
    <img src="styles/legend/InfrastrukturTransportasi_34_3.png" /> Terminal Penumpang Tipe C<br />'
        });
var format_SistemPusatPermukiman_35 = new ol.format.GeoJSON();
var features_SistemPusatPermukiman_35 = format_SistemPusatPermukiman_35.readFeatures(json_SistemPusatPermukiman_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemPusatPermukiman_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemPusatPermukiman_35.addFeatures(features_SistemPusatPermukiman_35);
var lyr_SistemPusatPermukiman_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemPusatPermukiman_35, 
                style: style_SistemPusatPermukiman_35,
                popuplayertitle: "Sistem Pusat Permukiman",
                interactive: true,
    title: 'Sistem Pusat Permukiman<br />\
    <img src="styles/legend/SistemPusatPermukiman_35_0.png" /> Pusat Pelayanan Kawasan<br />\
    <img src="styles/legend/SistemPusatPermukiman_35_1.png" /> Pusat Kegiatan Lokal (PKL)<br />\
    <img src="styles/legend/SistemPusatPermukiman_35_2.png" /> Pusat Pelayanan Lingkungan<br />'
        });
var format_Sungai_36 = new ol.format.GeoJSON();
var features_Sungai_36 = format_Sungai_36.readFeatures(json_Sungai_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_36.addFeatures(features_Sungai_36);
var lyr_Sungai_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_36, 
                style: style_Sungai_36,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_36.png" /> Sungai'
            });
var format_JaringanTransportasiRTRWProvinsi_37 = new ol.format.GeoJSON();
var features_JaringanTransportasiRTRWProvinsi_37 = format_JaringanTransportasiRTRWProvinsi_37.readFeatures(json_JaringanTransportasiRTRWProvinsi_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanTransportasiRTRWProvinsi_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanTransportasiRTRWProvinsi_37.addFeatures(features_JaringanTransportasiRTRWProvinsi_37);
var lyr_JaringanTransportasiRTRWProvinsi_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanTransportasiRTRWProvinsi_37, 
                style: style_JaringanTransportasiRTRWProvinsi_37,
                popuplayertitle: "Jaringan Transportasi (RTRW Provinsi)",
                interactive: true,
    title: 'Jaringan Transportasi (RTRW Provinsi)<br />\
    <img src="styles/legend/JaringanTransportasiRTRWProvinsi_37_0.png" /> Jalan Tol<br />\
    <img src="styles/legend/JaringanTransportasiRTRWProvinsi_37_1.png" /> Jalan Arteri Primer<br />\
    <img src="styles/legend/JaringanTransportasiRTRWProvinsi_37_2.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/JaringanTransportasiRTRWProvinsi_37_3.png" /> Jaringan Jalur Kereta Api<br />'
        });
var format_InfrastukturTransportasiRTRWProvinsi_38 = new ol.format.GeoJSON();
var features_InfrastukturTransportasiRTRWProvinsi_38 = format_InfrastukturTransportasiRTRWProvinsi_38.readFeatures(json_InfrastukturTransportasiRTRWProvinsi_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastukturTransportasiRTRWProvinsi_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastukturTransportasiRTRWProvinsi_38.addFeatures(features_InfrastukturTransportasiRTRWProvinsi_38);
var lyr_InfrastukturTransportasiRTRWProvinsi_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastukturTransportasiRTRWProvinsi_38, 
                style: style_InfrastukturTransportasiRTRWProvinsi_38,
                popuplayertitle: "Infrastuktur Transportasi (RTRW Provinsi)",
                interactive: true,
    title: 'Infrastuktur Transportasi (RTRW Provinsi)<br />\
    <img src="styles/legend/InfrastukturTransportasiRTRWProvinsi_38_0.png" /> Bandar Udara Pengumpul<br />\
    <img src="styles/legend/InfrastukturTransportasiRTRWProvinsi_38_1.png" /> Bandar Udara Pengumpan<br />\
    <img src="styles/legend/InfrastukturTransportasiRTRWProvinsi_38_2.png" /> Pelabuhan Utama<br />\
    <img src="styles/legend/InfrastukturTransportasiRTRWProvinsi_38_3.png" /> Stasiun Kereta Api<br />\
    <img src="styles/legend/InfrastukturTransportasiRTRWProvinsi_38_4.png" /> Terminal Barang<br />\
    <img src="styles/legend/InfrastukturTransportasiRTRWProvinsi_38_5.png" /> Terminal Khusus<br />\
    <img src="styles/legend/InfrastukturTransportasiRTRWProvinsi_38_6.png" /> Terminal Penumpang Tipe A<br />\
    <img src="styles/legend/InfrastukturTransportasiRTRWProvinsi_38_7.png" /> Terminal Penumpang Tipe B<br />'
        });
var format_SistemPusatPemukimanRTRWProvinsi_39 = new ol.format.GeoJSON();
var features_SistemPusatPemukimanRTRWProvinsi_39 = format_SistemPusatPemukimanRTRWProvinsi_39.readFeatures(json_SistemPusatPemukimanRTRWProvinsi_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SistemPusatPemukimanRTRWProvinsi_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemPusatPemukimanRTRWProvinsi_39.addFeatures(features_SistemPusatPemukimanRTRWProvinsi_39);
var lyr_SistemPusatPemukimanRTRWProvinsi_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemPusatPemukimanRTRWProvinsi_39, 
                style: style_SistemPusatPemukimanRTRWProvinsi_39,
                popuplayertitle: "Sistem Pusat Pemukiman (RTRW Provinsi)",
                interactive: true,
    title: 'Sistem Pusat Pemukiman (RTRW Provinsi)<br />\
    <img src="styles/legend/SistemPusatPemukimanRTRWProvinsi_39_0.png" /> Pusat Kegiatan Nasional (PKN)<br />\
    <img src="styles/legend/SistemPusatPemukimanRTRWProvinsi_39_1.png" /> Pusat Kegiatan Wilayah (PKW)<br />\
    <img src="styles/legend/SistemPusatPemukimanRTRWProvinsi_39_2.png" /> Pusat Kegiatan Lokal (PKL)<br />'
        });
var group_TRANSPORTASIRTRWPROVINSI = new ol.layer.Group({
                                layers: [lyr_JaringanTransportasiRTRWProvinsi_37,lyr_InfrastukturTransportasiRTRWProvinsi_38,],
                                fold: "close",
                                title: "TRANSPORTASI RTRW PROVINSI"});
var group_SISTEMPUSATPEMERINTAHANRTRWKABUPATENDRAFT2026 = new ol.layer.Group({
                                layers: [lyr_SistemPusatPermukiman_35,],
                                fold: "close",
                                title: "SISTEM PUSAT PEMERINTAHAN RTRW KABUPATEN (DRAFT 2026)"});
var group_TRANSPORTASIRTRWKABDRAFT2026 = new ol.layer.Group({
                                layers: [lyr_JaringanTransportasi_33,lyr_InfrastrukturTransportasi_34,],
                                fold: "close",
                                title: "TRANSPORTASI RTRW KAB (DRAFT 2026)"});
var group_PRASARANALAINNYARTRWKABDRAFT2026 = new ol.layer.Group({
                                layers: [lyr_JaringanPrasaranalainnya_31,lyr_InfrastrukturPrasaranLainnya_32,],
                                fold: "close",
                                title: "PRASARANA LAINNYA RTRW KAB (DRAFT 2026)"});
var group_ENERGIRTRWKABDRAFT2026 = new ol.layer.Group({
                                layers: [lyr_JaringanEnergi_29,lyr_InfrastrukturEnergi_30,],
                                fold: "close",
                                title: "ENERGI RTRW KAB (DRAFT 2026)"});
var group_TELEKOMUNIKASIRTRWKABDRAFT2026 = new ol.layer.Group({
                                layers: [lyr_JaringanTelekomunikasi_27,lyr_InfrastrukturTelekomunikasi_28,],
                                fold: "close",
                                title: "TELEKOMUNIKASI RTRW KAB (DRAFT 2026)"});
var group_SDAIRRTRWKABDRAFT2026 = new ol.layer.Group({
                                layers: [lyr_JaringanSumberDayaAir_25,lyr_InfrastrukturSumberDayaAir_26,],
                                fold: "close",
                                title: "SD AIR RTRW KAB (DRAFT 2026)"});
var group_POLARUANGRTRWKABDRAFT2026 = new ol.layer.Group({
                                layers: [lyr_POLARUANGRTRWKABUPATENDRAFT2026_24,],
                                fold: "close",
                                title: "POLA RUANG RTRW KAB (DRAFT 2026)"});
var group_USULANBATASWP = new ol.layer.Group({
                                layers: [lyr_WPKecamatanMojolaban_21,lyr_WPKecamatanGatak_22,lyr_WPKecamatanBaki_23,],
                                fold: "close",
                                title: "USULAN BATAS WP"});
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

lyr_googlemaps_0.setVisible(false);lyr_CITRAGOOGLE_1.setVisible(true);lyr_POLARUANG_WP_SUKARJO_2.setVisible(false);lyr_WP_NGUTER_BONDOSARI_3.setVisible(false);lyr_POLARUANG_WP_KARTASURA_4.setVisible(false);lyr_POLARUANG_WP_GROGOL_5.setVisible(false);lyr_LCTAHUN2040PREDIKSI_6.setVisible(false);lyr_LCTAHUN2030PREDIKSI_7.setVisible(false);lyr_LCTAHUN2020_8.setVisible(false);lyr_LCTAHUN2000_9.setVisible(false);lyr_RawanKekeringan_10.setVisible(false);lyr_RawanKarhutla_11.setVisible(false);lyr_RawanLongsor_12.setVisible(false);lyr_RawanGempa_13.setVisible(false);lyr_RawanLikuifaksi_14.setVisible(false);lyr_RawanCuacaEkstrimcopy_15.setVisible(false);lyr_RawanBanjir_16.setVisible(false);lyr_bataskecamatan_17.setVisible(true);lyr_batasdesakelurahan_18.setVisible(true);lyr_LSD2021KabupatenSukoharjo_19.setVisible(false);lyr_LBS2025KabupatenSukoharjo_20.setVisible(false);lyr_WPKecamatanMojolaban_21.setVisible(true);lyr_WPKecamatanGatak_22.setVisible(true);lyr_WPKecamatanBaki_23.setVisible(true);lyr_POLARUANGRTRWKABUPATENDRAFT2026_24.setVisible(false);lyr_JaringanSumberDayaAir_25.setVisible(false);lyr_InfrastrukturSumberDayaAir_26.setVisible(false);lyr_JaringanTelekomunikasi_27.setVisible(false);lyr_InfrastrukturTelekomunikasi_28.setVisible(false);lyr_JaringanEnergi_29.setVisible(false);lyr_InfrastrukturEnergi_30.setVisible(false);lyr_JaringanPrasaranalainnya_31.setVisible(false);lyr_InfrastrukturPrasaranLainnya_32.setVisible(false);lyr_JaringanTransportasi_33.setVisible(false);lyr_InfrastrukturTransportasi_34.setVisible(false);lyr_SistemPusatPermukiman_35.setVisible(true);lyr_Sungai_36.setVisible(true);lyr_JaringanTransportasiRTRWProvinsi_37.setVisible(false);lyr_InfrastukturTransportasiRTRWProvinsi_38.setVisible(false);lyr_SistemPusatPemukimanRTRWProvinsi_39.setVisible(true);
var layersList = [lyr_googlemaps_0,lyr_CITRAGOOGLE_1,group_RDTRYANGSUDAHPERDA,group_LCTIMESERIESDANANALISISCA,group_RAWANBENCANAINARISKBNPB,lyr_bataskecamatan_17,lyr_batasdesakelurahan_18,lyr_LSD2021KabupatenSukoharjo_19,lyr_LBS2025KabupatenSukoharjo_20,group_USULANBATASWP,group_POLARUANGRTRWKABDRAFT2026,group_SDAIRRTRWKABDRAFT2026,group_TELEKOMUNIKASIRTRWKABDRAFT2026,group_ENERGIRTRWKABDRAFT2026,group_PRASARANALAINNYARTRWKABDRAFT2026,group_TRANSPORTASIRTRWKABDRAFT2026,group_SISTEMPUSATPEMERINTAHANRTRWKABUPATENDRAFT2026,lyr_Sungai_36,group_TRANSPORTASIRTRWPROVINSI,lyr_SistemPusatPemukimanRTRWProvinsi_39];
lyr_LCTAHUN2040PREDIKSI_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'lc_40': 'lc_40', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LCTAHUN2030PREDIKSI_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'lc_30': 'lc_30', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LCTAHUN2020_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'lc_20': 'lc_20', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LCTAHUN2000_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'lc_00': 'lc_00', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RawanKekeringan_10.set('fieldAliases', {'R_KERINGN': 'R_KERINGN', });
lyr_RawanKarhutla_11.set('fieldAliases', {'R_KARHUTLA': 'R_KARHUTLA', });
lyr_RawanLongsor_12.set('fieldAliases', {'R_LONGSOR': 'R_LONGSOR', });
lyr_RawanGempa_13.set('fieldAliases', {'R_GEMPA': 'R_GEMPA', });
lyr_RawanLikuifaksi_14.set('fieldAliases', {'R_LIKUIFAK': 'R_LIKUIFAK', });
lyr_RawanCuacaEkstrimcopy_15.set('fieldAliases', {'R_CUAEKSTR': 'R_CUAEKSTR', });
lyr_RawanBanjir_16.set('fieldAliases', {'R_BANJIR': 'R_BANJIR', });
lyr_bataskecamatan_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Luas': 'Luas', });
lyr_batasdesakelurahan_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Status': 'Status', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ha': 'ha', });
lyr_LSD2021KabupatenSukoharjo_19.set('fieldAliases', {'HUTAN': 'HUTAN', 'LSD': 'LSD', 'LUAS': 'LUAS', 'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'CETAKSWH': 'CETAKSWH', 'METADATA': 'METADATA', });
lyr_LBS2025KabupatenSukoharjo_20.set('fieldAliases', {'WADMPR': 'WADMPR', 'KDPPUM': 'KDPPUM', 'WADMKK': 'WADMKK', 'KDPKAB': 'KDPKAB', 'QNAME25': 'QNAME25', 'JSWH': 'JSWH', 'CTKSWH': 'CTKSWH', 'LUASHA': 'LUASHA', 'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WPKecamatanMojolaban_21.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_WPKecamatanGatak_22.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_WPKecamatanBaki_23.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_POLARUANGRTRWKABUPATENDRAFT2026_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_ADMINISTRASI_DESAKEL_AR_2026': 'FID_ADMINISTRASI_DESAKEL_AR_2026', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'FID__3311_50KB_AR_PR_KABUPATENSUKOHARJO_2026': 'FID__3311_50KB_AR_PR_KABUPATENSUKOHARJO_2026', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'KODKWS': 'Kode Kawasan', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK_1': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC_1': 'Wilayah Administrasi Kecamatan', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'KP2B_2': 'Kawasan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'REMARK': 'Catatan', 'LUASHA': 'Luas Area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_JaringanSumberDayaAir_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'FID_ADMINI': 'FID_ADMINI', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'xnamobj': 'xnamobj', 'Orde_1': 'Orde_1', 'Orde_2': 'Orde_2', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'status': 'status', 'meter': 'meter', });
lyr_InfrastrukturSumberDayaAir_26.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'STSJRN': 'STSJRN', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'xnamobj': 'xnamobj', 'Orde_1': 'Orde_1', 'Orde_2': 'Orde_2', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'status': 'status', 'jumlah': 'jumlah', });
lyr_JaringanTelekomunikasi_27.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'FID_ADMINI': 'FID_ADMINI', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'xnamobj': 'xnamobj', 'Orde_1': 'Orde_1', 'Orde_2': 'Orde_2', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'status': 'status', 'meter': 'meter', });
lyr_InfrastrukturTelekomunikasi_28.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'STSJRN': 'STSJRN', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'xnamobj': 'xnamobj', 'Orde_1': 'Orde_1', 'Orde_2': 'Orde_2', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'status': 'status', 'jumlah': 'jumlah', });
lyr_JaringanEnergi_29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'FID_ADMINI': 'FID_ADMINI', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'xnamobj': 'xnamobj', 'Orde_1': 'Orde_1', 'Orde_2': 'Orde_2', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'status': 'status', 'meter': 'meter', });
lyr_InfrastrukturEnergi_30.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'STSJRN': 'STSJRN', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'xnamobj': 'xnamobj', 'Orde_1': 'Orde_1', 'Orde_2': 'Orde_2', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'status': 'status', 'jumlah': 'jumlah', });
lyr_JaringanPrasaranalainnya_31.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'FID_ADMINI': 'FID_ADMINI', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'xnamobj': 'xnamobj', 'Orde_1': 'Orde_1', 'Orde_2': 'Orde_2', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'status': 'status', 'meter': 'meter', });
lyr_InfrastrukturPrasaranLainnya_32.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'STSJRN': 'STSJRN', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'xnamobj': 'xnamobj', 'Orde_1': 'Orde_1', 'Orde_2': 'Orde_2', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'status': 'status', 'jumlah': 'jumlah', });
lyr_JaringanTransportasi_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'FID_ADMINI': 'FID_ADMINI', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'xnamobj': 'xnamobj', 'Orde_1': 'Orde_1', 'Orde_2': 'Orde_2', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'status': 'status', 'meter': 'meter', });
lyr_InfrastrukturTransportasi_34.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'STSJRN': 'STSJRN', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'xnamobj': 'xnamobj', 'Orde_1': 'Orde_1', 'Orde_2': 'Orde_2', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'status': 'status', 'jumlah': 'jumlah', });
lyr_SistemPusatPermukiman_35.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'STSJRN': 'STSJRN', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'xnamobj': 'xnamobj', 'Orde_1': 'Orde_1', 'Orde_2': 'Orde_2', 'Orde_3': 'Orde_3', 'Orde_4': 'Orde_4', 'status': 'status', 'jumlah': 'jumlah', });
lyr_Sungai_36.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_JaringanTransportasiRTRWProvinsi_37.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'SHAPE_Length': 'SHAPE_Length', });
lyr_InfrastukturTransportasiRTRWProvinsi_38.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', });
lyr_SistemPusatPemukimanRTRWProvinsi_39.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'ORDE03': 'Orde 3', 'ORDE04': 'Orde 4', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_LCTAHUN2040PREDIKSI_6.set('fieldImages', {'OBJECTID': '', 'lc_40': 'TextEdit', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LCTAHUN2030PREDIKSI_7.set('fieldImages', {'OBJECTID': '', 'lc_30': 'TextEdit', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LCTAHUN2020_8.set('fieldImages', {'OBJECTID': '', 'lc_20': 'TextEdit', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_LCTAHUN2000_9.set('fieldImages', {'OBJECTID': '', 'lc_00': 'TextEdit', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_RawanKekeringan_10.set('fieldImages', {'R_KERINGN': 'TextEdit', });
lyr_RawanKarhutla_11.set('fieldImages', {'R_KARHUTLA': 'TextEdit', });
lyr_RawanLongsor_12.set('fieldImages', {'R_LONGSOR': 'TextEdit', });
lyr_RawanGempa_13.set('fieldImages', {'R_GEMPA': 'TextEdit', });
lyr_RawanLikuifaksi_14.set('fieldImages', {'R_LIKUIFAK': 'TextEdit', });
lyr_RawanCuacaEkstrimcopy_15.set('fieldImages', {'R_CUAEKSTR': 'TextEdit', });
lyr_RawanBanjir_16.set('fieldImages', {'R_BANJIR': 'TextEdit', });
lyr_bataskecamatan_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Luas': 'TextEdit', });
lyr_batasdesakelurahan_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Status': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ha': 'TextEdit', });
lyr_LSD2021KabupatenSukoharjo_19.set('fieldImages', {'HUTAN': 'TextEdit', 'LSD': 'TextEdit', 'LUAS': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'CETAKSWH': 'Range', 'METADATA': 'TextEdit', });
lyr_LBS2025KabupatenSukoharjo_20.set('fieldImages', {'WADMPR': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKK': 'TextEdit', 'KDPKAB': 'TextEdit', 'QNAME25': 'TextEdit', 'JSWH': 'TextEdit', 'CTKSWH': 'TextEdit', 'LUASHA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'METADATA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WPKecamatanMojolaban_21.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_WPKecamatanGatak_22.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_WPKecamatanBaki_23.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_POLARUANGRTRWKABUPATENDRAFT2026_24.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_ADMINISTRASI_DESAKEL_AR_2026': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'FID__3311_50KB_AR_PR_KABUPATENSUKOHARJO_2026': 'Range', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'ORDE03': 'ValueMap', 'ORDE04': 'ValueMap', 'KODKWS': 'ValueMap', 'JNSRPR': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK_1': 'TextEdit', 'WADMKC_1': 'TextEdit', 'KKOP_1': 'ValueMap', 'KP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JaringanSumberDayaAir_25.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'FID_ADMINI': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'xnamobj': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_2': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'status': 'TextEdit', 'meter': 'TextEdit', });
lyr_InfrastrukturSumberDayaAir_26.set('fieldImages', {'NAMOBJ': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'xnamobj': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_2': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'status': 'TextEdit', 'jumlah': 'Range', });
lyr_JaringanTelekomunikasi_27.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'FID_ADMINI': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'xnamobj': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_2': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'status': 'TextEdit', 'meter': 'TextEdit', });
lyr_InfrastrukturTelekomunikasi_28.set('fieldImages', {'NAMOBJ': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'xnamobj': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_2': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'status': 'TextEdit', 'jumlah': 'Range', });
lyr_JaringanEnergi_29.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'FID_ADMINI': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'xnamobj': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_2': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'status': 'TextEdit', 'meter': 'TextEdit', });
lyr_InfrastrukturEnergi_30.set('fieldImages', {'NAMOBJ': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'xnamobj': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_2': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'status': 'TextEdit', 'jumlah': 'Range', });
lyr_JaringanPrasaranalainnya_31.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'FID_ADMINI': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'xnamobj': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_2': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'status': 'TextEdit', 'meter': 'TextEdit', });
lyr_InfrastrukturPrasaranLainnya_32.set('fieldImages', {'NAMOBJ': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'xnamobj': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_2': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'status': 'TextEdit', 'jumlah': 'Range', });
lyr_JaringanTransportasi_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'FID_ADMINI': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'xnamobj': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_2': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'status': 'TextEdit', 'meter': 'TextEdit', });
lyr_InfrastrukturTransportasi_34.set('fieldImages', {'NAMOBJ': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'xnamobj': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_2': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'status': 'TextEdit', 'jumlah': 'Range', });
lyr_SistemPusatPermukiman_35.set('fieldImages', {'NAMOBJ': 'TextEdit', 'STSJRN': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'xnamobj': 'TextEdit', 'Orde_1': 'TextEdit', 'Orde_2': 'TextEdit', 'Orde_3': 'TextEdit', 'Orde_4': 'TextEdit', 'status': 'TextEdit', 'jumlah': 'Range', });
lyr_Sungai_36.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'TextEdit', 'name': 'TextEdit', });
lyr_JaringanTransportasiRTRWProvinsi_37.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'ORDE03': 'ValueMap', 'ORDE04': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_InfrastukturTransportasiRTRWProvinsi_38.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_SistemPusatPemukimanRTRWProvinsi_39.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'ORDE03': 'ValueMap', 'ORDE04': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_LCTAHUN2040PREDIKSI_6.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'lc_40': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_LCTAHUN2030PREDIKSI_7.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'lc_30': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_LCTAHUN2020_8.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'lc_20': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_LCTAHUN2000_9.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'lc_00': 'inline label - visible with data', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_RawanKekeringan_10.set('fieldLabels', {'R_KERINGN': 'inline label - always visible', });
lyr_RawanKarhutla_11.set('fieldLabels', {'R_KARHUTLA': 'inline label - always visible', });
lyr_RawanLongsor_12.set('fieldLabels', {'R_LONGSOR': 'inline label - always visible', });
lyr_RawanGempa_13.set('fieldLabels', {'R_GEMPA': 'inline label - always visible', });
lyr_RawanLikuifaksi_14.set('fieldLabels', {'R_LIKUIFAK': 'inline label - always visible', });
lyr_RawanCuacaEkstrimcopy_15.set('fieldLabels', {'R_CUAEKSTR': 'inline label - always visible', });
lyr_RawanBanjir_16.set('fieldLabels', {'R_BANJIR': 'inline label - always visible', });
lyr_bataskecamatan_17.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'KDPKAB': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'TIPADM': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Luas': 'no label', });
lyr_batasdesakelurahan_18.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDCBPS': 'inline label - visible with data', 'KDCPUM': 'inline label - always visible', 'KDEBPS': 'inline label - visible with data', 'KDEPUM': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'KDPKAB': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'Status': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'ha': 'no label', });
lyr_LSD2021KabupatenSukoharjo_19.set('fieldLabels', {'HUTAN': 'inline label - always visible', 'LSD': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'KABUPATEN': 'inline label - always visible', 'PROVINSI': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'CETAKSWH': 'inline label - always visible', 'METADATA': 'inline label - always visible', });
lyr_LBS2025KabupatenSukoharjo_20.set('fieldLabels', {'WADMPR': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'KDPKAB': 'inline label - always visible', 'QNAME25': 'inline label - always visible', 'JSWH': 'inline label - always visible', 'CTKSWH': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_WPKecamatanMojolaban_21.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - always visible', });
lyr_WPKecamatanGatak_22.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_WPKecamatanBaki_23.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_POLARUANGRTRWKABUPATENDRAFT2026_24.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_ADMINISTRASI_DESAKEL_AR_2026': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'FID__3311_50KB_AR_PR_KABUPATENSUKOHARJO_2026': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'KODKWS': 'inline label - always visible', 'JNSRPR': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK_1': 'inline label - always visible', 'WADMKC_1': 'inline label - always visible', 'KKOP_1': 'inline label - always visible', 'KP2B_2': 'inline label - always visible', 'KRB_03': 'inline label - always visible', 'CAGBUD': 'inline label - always visible', 'RESAIR': 'inline label - always visible', 'KSMPDN': 'inline label - always visible', 'HANKAM': 'inline label - always visible', 'KKARST': 'inline label - always visible', 'PTBGMB': 'inline label - always visible', 'MGRSAT': 'inline label - always visible', 'RDBUMI': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_JaringanSumberDayaAir_25.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'FID_ADMINI': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'xnamobj': 'inline label - always visible', 'Orde_1': 'inline label - always visible', 'Orde_2': 'inline label - always visible', 'Orde_3': 'inline label - always visible', 'Orde_4': 'inline label - always visible', 'status': 'inline label - always visible', 'meter': 'inline label - always visible', });
lyr_InfrastrukturSumberDayaAir_26.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'xnamobj': 'inline label - always visible', 'Orde_1': 'inline label - always visible', 'Orde_2': 'inline label - always visible', 'Orde_3': 'inline label - always visible', 'Orde_4': 'inline label - always visible', 'status': 'inline label - always visible', 'jumlah': 'inline label - always visible', });
lyr_JaringanTelekomunikasi_27.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'FID_ADMINI': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'xnamobj': 'inline label - always visible', 'Orde_1': 'inline label - always visible', 'Orde_2': 'inline label - always visible', 'Orde_3': 'inline label - always visible', 'Orde_4': 'inline label - always visible', 'status': 'inline label - always visible', 'meter': 'inline label - always visible', });
lyr_InfrastrukturTelekomunikasi_28.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'xnamobj': 'inline label - always visible', 'Orde_1': 'inline label - always visible', 'Orde_2': 'inline label - always visible', 'Orde_3': 'inline label - always visible', 'Orde_4': 'inline label - always visible', 'status': 'inline label - visible with data', 'jumlah': 'inline label - always visible', });
lyr_JaringanEnergi_29.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'FID_ADMINI': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'xnamobj': 'inline label - always visible', 'Orde_1': 'inline label - always visible', 'Orde_2': 'inline label - always visible', 'Orde_3': 'inline label - always visible', 'Orde_4': 'inline label - always visible', 'status': 'inline label - always visible', 'meter': 'inline label - always visible', });
lyr_InfrastrukturEnergi_30.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'xnamobj': 'inline label - always visible', 'Orde_1': 'inline label - always visible', 'Orde_2': 'inline label - always visible', 'Orde_3': 'inline label - always visible', 'Orde_4': 'inline label - always visible', 'status': 'inline label - always visible', 'jumlah': 'inline label - visible with data', });
lyr_JaringanPrasaranalainnya_31.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'FID_ADMINI': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'xnamobj': 'inline label - always visible', 'Orde_1': 'inline label - always visible', 'Orde_2': 'inline label - always visible', 'Orde_3': 'inline label - always visible', 'Orde_4': 'inline label - always visible', 'status': 'inline label - always visible', 'meter': 'inline label - always visible', });
lyr_InfrastrukturPrasaranLainnya_32.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'xnamobj': 'inline label - always visible', 'Orde_1': 'inline label - always visible', 'Orde_2': 'inline label - always visible', 'Orde_3': 'inline label - always visible', 'Orde_4': 'inline label - always visible', 'status': 'inline label - always visible', 'jumlah': 'inline label - visible with data', });
lyr_JaringanTransportasi_33.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'FID_ADMINI': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'xnamobj': 'inline label - always visible', 'Orde_1': 'inline label - always visible', 'Orde_2': 'inline label - always visible', 'Orde_3': 'inline label - always visible', 'Orde_4': 'inline label - always visible', 'status': 'inline label - always visible', 'meter': 'inline label - always visible', });
lyr_InfrastrukturTransportasi_34.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'xnamobj': 'inline label - always visible', 'Orde_1': 'inline label - always visible', 'Orde_2': 'inline label - always visible', 'Orde_3': 'inline label - always visible', 'Orde_4': 'inline label - always visible', 'status': 'inline label - always visible', 'jumlah': 'inline label - always visible', });
lyr_SistemPusatPermukiman_35.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'xnamobj': 'inline label - always visible', 'Orde_1': 'inline label - always visible', 'Orde_2': 'inline label - always visible', 'Orde_3': 'inline label - always visible', 'Orde_4': 'inline label - always visible', 'status': 'inline label - always visible', 'jumlah': 'inline label - always visible', });
lyr_Sungai_36.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'width': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_JaringanTransportasiRTRWProvinsi_37.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'SHAPE_Length': 'inline label - always visible', });
lyr_InfrastukturTransportasiRTRWProvinsi_38.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_SistemPusatPemukimanRTRWProvinsi_39.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'ORDE03': 'inline label - always visible', 'ORDE04': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_SistemPusatPemukimanRTRWProvinsi_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});