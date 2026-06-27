var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_WarrawongtoKembleGrange_1 = new ol.format.GeoJSON();
var features_WarrawongtoKembleGrange_1 = format_WarrawongtoKembleGrange_1.readFeatures(json_WarrawongtoKembleGrange_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarrawongtoKembleGrange_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarrawongtoKembleGrange_1.addFeatures(features_WarrawongtoKembleGrange_1);
var lyr_WarrawongtoKembleGrange_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarrawongtoKembleGrange_1, 
                style: style_WarrawongtoKembleGrange_1,
                popuplayertitle: 'Warrawong to Kemble Grange',
                interactive: true,
    title: 'Warrawong to Kemble Grange<br />\
    <img src="styles/legend/WarrawongtoKembleGrange_1_0.png" /> blue<br />\
    <img src="styles/legend/WarrawongtoKembleGrange_1_1.png" /> yellow<br />\
    <img src="styles/legend/WarrawongtoKembleGrange_1_2.png" /> <br />' });
var format_ShellharbourNtoWindang_2 = new ol.format.GeoJSON();
var features_ShellharbourNtoWindang_2 = format_ShellharbourNtoWindang_2.readFeatures(json_ShellharbourNtoWindang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShellharbourNtoWindang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShellharbourNtoWindang_2.addFeatures(features_ShellharbourNtoWindang_2);
var lyr_ShellharbourNtoWindang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShellharbourNtoWindang_2, 
                style: style_ShellharbourNtoWindang_2,
                popuplayertitle: 'Shellharbour N to Windang',
                interactive: true,
    title: 'Shellharbour N to Windang<br />\
    <img src="styles/legend/ShellharbourNtoWindang_2_0.png" /> blue<br />\
    <img src="styles/legend/ShellharbourNtoWindang_2_1.png" /> Yellow<br />\
    <img src="styles/legend/ShellharbourNtoWindang_2_2.png" /> <br />' });
var format_ShellharbourtoSwampRoad_3 = new ol.format.GeoJSON();
var features_ShellharbourtoSwampRoad_3 = format_ShellharbourtoSwampRoad_3.readFeatures(json_ShellharbourtoSwampRoad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShellharbourtoSwampRoad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShellharbourtoSwampRoad_3.addFeatures(features_ShellharbourtoSwampRoad_3);
var lyr_ShellharbourtoSwampRoad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShellharbourtoSwampRoad_3, 
                style: style_ShellharbourtoSwampRoad_3,
                popuplayertitle: 'Shellharbour to Swamp Road',
                interactive: true,
                title: '<img src="styles/legend/ShellharbourtoSwampRoad_3.png" /> Shellharbour to Swamp Road'
            });
var format_DunmoretoCroomRoad_4 = new ol.format.GeoJSON();
var features_DunmoretoCroomRoad_4 = format_DunmoretoCroomRoad_4.readFeatures(json_DunmoretoCroomRoad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DunmoretoCroomRoad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DunmoretoCroomRoad_4.addFeatures(features_DunmoretoCroomRoad_4);
var lyr_DunmoretoCroomRoad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DunmoretoCroomRoad_4, 
                style: style_DunmoretoCroomRoad_4,
                popuplayertitle: 'Dunmore to Croom Road',
                interactive: true,
                title: '<img src="styles/legend/DunmoretoCroomRoad_4.png" /> Dunmore to Croom Road'
            });
var format_WarrawongtoPortKembla_5 = new ol.format.GeoJSON();
var features_WarrawongtoPortKembla_5 = format_WarrawongtoPortKembla_5.readFeatures(json_WarrawongtoPortKembla_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarrawongtoPortKembla_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarrawongtoPortKembla_5.addFeatures(features_WarrawongtoPortKembla_5);
var lyr_WarrawongtoPortKembla_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarrawongtoPortKembla_5, 
                style: style_WarrawongtoPortKembla_5,
                popuplayertitle: 'Warrawong to Port Kembla',
                interactive: true,
    title: 'Warrawong to Port Kembla<br />\
    <img src="styles/legend/WarrawongtoPortKembla_5_0.png" /> blue<br />\
    <img src="styles/legend/WarrawongtoPortKembla_5_1.png" /> yellow<br />\
    <img src="styles/legend/WarrawongtoPortKembla_5_2.png" /> <br />' });
var format_SkiParktoShellharboutNorth_6 = new ol.format.GeoJSON();
var features_SkiParktoShellharboutNorth_6 = format_SkiParktoShellharboutNorth_6.readFeatures(json_SkiParktoShellharboutNorth_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SkiParktoShellharboutNorth_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SkiParktoShellharboutNorth_6.addFeatures(features_SkiParktoShellharboutNorth_6);
var lyr_SkiParktoShellharboutNorth_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SkiParktoShellharboutNorth_6, 
                style: style_SkiParktoShellharboutNorth_6,
                popuplayertitle: 'Ski Park to Shellharbout North',
                interactive: true,
    title: 'Ski Park to Shellharbout North<br />\
    <img src="styles/legend/SkiParktoShellharboutNorth_6_0.png" /> blue<br />\
    <img src="styles/legend/SkiParktoShellharboutNorth_6_1.png" /> oragne<br />\
    <img src="styles/legend/SkiParktoShellharboutNorth_6_2.png" /> yellow<br />\
    <img src="styles/legend/SkiParktoShellharboutNorth_6_3.png" /> <br />' });
var format_MinnamurratoBombo_7 = new ol.format.GeoJSON();
var features_MinnamurratoBombo_7 = format_MinnamurratoBombo_7.readFeatures(json_MinnamurratoBombo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MinnamurratoBombo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinnamurratoBombo_7.addFeatures(features_MinnamurratoBombo_7);
var lyr_MinnamurratoBombo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MinnamurratoBombo_7, 
                style: style_MinnamurratoBombo_7,
                popuplayertitle: 'Minnamurra to Bombo',
                interactive: true,
                title: '<img src="styles/legend/MinnamurratoBombo_7.png" /> Minnamurra to Bombo'
            });
var format_WarrawongtoKembleGrange_8 = new ol.format.GeoJSON();
var features_WarrawongtoKembleGrange_8 = format_WarrawongtoKembleGrange_8.readFeatures(json_WarrawongtoKembleGrange_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarrawongtoKembleGrange_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarrawongtoKembleGrange_8.addFeatures(features_WarrawongtoKembleGrange_8);
var lyr_WarrawongtoKembleGrange_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarrawongtoKembleGrange_8, 
                style: style_WarrawongtoKembleGrange_8,
                popuplayertitle: 'Warrawong to Kemble Grange',
                interactive: true,
    title: 'Warrawong to Kemble Grange<br />\
    <img src="styles/legend/WarrawongtoKembleGrange_8_0.png" /> blue<br />\
    <img src="styles/legend/WarrawongtoKembleGrange_8_1.png" /> yellow<br />\
    <img src="styles/legend/WarrawongtoKembleGrange_8_2.png" /> <br />' });
var format_WindangtoSkiPark_9 = new ol.format.GeoJSON();
var features_WindangtoSkiPark_9 = format_WindangtoSkiPark_9.readFeatures(json_WindangtoSkiPark_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindangtoSkiPark_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindangtoSkiPark_9.addFeatures(features_WindangtoSkiPark_9);
var lyr_WindangtoSkiPark_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WindangtoSkiPark_9, 
                style: style_WindangtoSkiPark_9,
                popuplayertitle: 'Windang to Ski Park',
                interactive: true,
                title: '<img src="styles/legend/WindangtoSkiPark_9.png" /> Windang to Ski Park'
            });
var format_WindangtoWarrawong_10 = new ol.format.GeoJSON();
var features_WindangtoWarrawong_10 = format_WindangtoWarrawong_10.readFeatures(json_WindangtoWarrawong_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindangtoWarrawong_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindangtoWarrawong_10.addFeatures(features_WindangtoWarrawong_10);
var lyr_WindangtoWarrawong_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WindangtoWarrawong_10, 
                style: style_WindangtoWarrawong_10,
                popuplayertitle: 'Windang to Warrawong',
                interactive: true,
    title: 'Windang to Warrawong<br />\
    <img src="styles/legend/WindangtoWarrawong_10_0.png" /> blue<br />\
    <img src="styles/legend/WindangtoWarrawong_10_1.png" /> yellow<br />\
    <img src="styles/legend/WindangtoWarrawong_10_2.png" /> <br />' });
var format_YallahDaptoAlbionPark_11 = new ol.format.GeoJSON();
var features_YallahDaptoAlbionPark_11 = format_YallahDaptoAlbionPark_11.readFeatures(json_YallahDaptoAlbionPark_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YallahDaptoAlbionPark_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YallahDaptoAlbionPark_11.addFeatures(features_YallahDaptoAlbionPark_11);
var lyr_YallahDaptoAlbionPark_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YallahDaptoAlbionPark_11, 
                style: style_YallahDaptoAlbionPark_11,
                popuplayertitle: 'Yallah Dapto Albion Park',
                interactive: true,
    title: 'Yallah Dapto Albion Park<br />\
    <img src="styles/legend/YallahDaptoAlbionPark_11_0.png" /> Dark Yellow<br />\
    <img src="styles/legend/YallahDaptoAlbionPark_11_1.png" /> Red<br />\
    <img src="styles/legend/YallahDaptoAlbionPark_11_2.png" /> <br />' });
var format_YallahtoAlbionPark_12 = new ol.format.GeoJSON();
var features_YallahtoAlbionPark_12 = format_YallahtoAlbionPark_12.readFeatures(json_YallahtoAlbionPark_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YallahtoAlbionPark_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YallahtoAlbionPark_12.addFeatures(features_YallahtoAlbionPark_12);
var lyr_YallahtoAlbionPark_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YallahtoAlbionPark_12, 
                style: style_YallahtoAlbionPark_12,
                popuplayertitle: 'Yallah to Albion Park',
                interactive: true,
                title: '<img src="styles/legend/YallahtoAlbionPark_12.png" /> Yallah to Albion Park'
            });
var format_AlbionParktoCroomRoad_13 = new ol.format.GeoJSON();
var features_AlbionParktoCroomRoad_13 = format_AlbionParktoCroomRoad_13.readFeatures(json_AlbionParktoCroomRoad_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbionParktoCroomRoad_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbionParktoCroomRoad_13.addFeatures(features_AlbionParktoCroomRoad_13);
var lyr_AlbionParktoCroomRoad_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbionParktoCroomRoad_13, 
                style: style_AlbionParktoCroomRoad_13,
                popuplayertitle: 'Albion Park to Croom Road',
                interactive: true,
                title: '<img src="styles/legend/AlbionParktoCroomRoad_13.png" /> Albion Park to Croom Road'
            });
var format_CroomRoadtoAlbionPark_14 = new ol.format.GeoJSON();
var features_CroomRoadtoAlbionPark_14 = format_CroomRoadtoAlbionPark_14.readFeatures(json_CroomRoadtoAlbionPark_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CroomRoadtoAlbionPark_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CroomRoadtoAlbionPark_14.addFeatures(features_CroomRoadtoAlbionPark_14);
var lyr_CroomRoadtoAlbionPark_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CroomRoadtoAlbionPark_14, 
                style: style_CroomRoadtoAlbionPark_14,
                popuplayertitle: 'Croom Road to Albion Park',
                interactive: true,
    title: 'Croom Road to Albion Park<br />\
    <img src="styles/legend/CroomRoadtoAlbionPark_14_0.png" /> Blue<br />\
    <img src="styles/legend/CroomRoadtoAlbionPark_14_1.png" /> Pink<br />\
    <img src="styles/legend/CroomRoadtoAlbionPark_14_2.png" /> <br />' });
var format_YallahtoSkiPark_15 = new ol.format.GeoJSON();
var features_YallahtoSkiPark_15 = format_YallahtoSkiPark_15.readFeatures(json_YallahtoSkiPark_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YallahtoSkiPark_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YallahtoSkiPark_15.addFeatures(features_YallahtoSkiPark_15);
var lyr_YallahtoSkiPark_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YallahtoSkiPark_15, 
                style: style_YallahtoSkiPark_15,
                popuplayertitle: 'Yallah to Ski Park',
                interactive: true,
    title: 'Yallah to Ski Park<br />\
    <img src="styles/legend/YallahtoSkiPark_15_0.png" /> blue<br />\
    <img src="styles/legend/YallahtoSkiPark_15_1.png" /> yellow<br />\
    <img src="styles/legend/YallahtoSkiPark_15_2.png" /> <br />' });
var format_KembaGrangetoYallah_16 = new ol.format.GeoJSON();
var features_KembaGrangetoYallah_16 = format_KembaGrangetoYallah_16.readFeatures(json_KembaGrangetoYallah_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KembaGrangetoYallah_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KembaGrangetoYallah_16.addFeatures(features_KembaGrangetoYallah_16);
var lyr_KembaGrangetoYallah_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KembaGrangetoYallah_16, 
                style: style_KembaGrangetoYallah_16,
                popuplayertitle: 'Kemba Grange to Yallah',
                interactive: true,
    title: 'Kemba Grange to Yallah<br />\
    <img src="styles/legend/KembaGrangetoYallah_16_0.png" /> blue<br />\
    <img src="styles/legend/KembaGrangetoYallah_16_1.png" /> yellow<br />\
    <img src="styles/legend/KembaGrangetoYallah_16_2.png" /> <br />' });
var format_WindangtoWarrawong_17 = new ol.format.GeoJSON();
var features_WindangtoWarrawong_17 = format_WindangtoWarrawong_17.readFeatures(json_WindangtoWarrawong_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindangtoWarrawong_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindangtoWarrawong_17.addFeatures(features_WindangtoWarrawong_17);
var lyr_WindangtoWarrawong_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WindangtoWarrawong_17, 
                style: style_WindangtoWarrawong_17,
                popuplayertitle: 'Windang to Warrawong',
                interactive: true,
    title: 'Windang to Warrawong<br />\
    <img src="styles/legend/WindangtoWarrawong_17_0.png" /> blue<br />\
    <img src="styles/legend/WindangtoWarrawong_17_1.png" /> yellow<br />\
    <img src="styles/legend/WindangtoWarrawong_17_2.png" /> <br />' });
var format_Merged_18 = new ol.format.GeoJSON();
var features_Merged_18 = format_Merged_18.readFeatures(json_Merged_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merged_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merged_18.addFeatures(features_Merged_18);
var lyr_Merged_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Merged_18, 
                style: style_Merged_18,
                popuplayertitle: 'Merged',
                interactive: true,
                title: '<img src="styles/legend/Merged_18.png" /> Merged'
            });

lyr_EsriWorldImagery_0.setVisible(true);lyr_WarrawongtoKembleGrange_1.setVisible(true);lyr_ShellharbourNtoWindang_2.setVisible(true);lyr_ShellharbourtoSwampRoad_3.setVisible(true);lyr_DunmoretoCroomRoad_4.setVisible(true);lyr_WarrawongtoPortKembla_5.setVisible(true);lyr_SkiParktoShellharboutNorth_6.setVisible(true);lyr_MinnamurratoBombo_7.setVisible(true);lyr_WarrawongtoKembleGrange_8.setVisible(true);lyr_WindangtoSkiPark_9.setVisible(true);lyr_WindangtoWarrawong_10.setVisible(true);lyr_YallahDaptoAlbionPark_11.setVisible(true);lyr_YallahtoAlbionPark_12.setVisible(true);lyr_AlbionParktoCroomRoad_13.setVisible(true);lyr_CroomRoadtoAlbionPark_14.setVisible(true);lyr_YallahtoSkiPark_15.setVisible(true);lyr_KembaGrangetoYallah_16.setVisible(true);lyr_WindangtoWarrawong_17.setVisible(true);lyr_Merged_18.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_WarrawongtoKembleGrange_1,lyr_ShellharbourNtoWindang_2,lyr_ShellharbourtoSwampRoad_3,lyr_DunmoretoCroomRoad_4,lyr_WarrawongtoPortKembla_5,lyr_SkiParktoShellharboutNorth_6,lyr_MinnamurratoBombo_7,lyr_WarrawongtoKembleGrange_8,lyr_WindangtoSkiPark_9,lyr_WindangtoWarrawong_10,lyr_YallahDaptoAlbionPark_11,lyr_YallahtoAlbionPark_12,lyr_AlbionParktoCroomRoad_13,lyr_CroomRoadtoAlbionPark_14,lyr_YallahtoSkiPark_15,lyr_KembaGrangetoYallah_16,lyr_WindangtoWarrawong_17,lyr_Merged_18];
lyr_WarrawongtoKembleGrange_1.set('fieldAliases', {'id': 'id', 'colour': 'colour', });
lyr_ShellharbourNtoWindang_2.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', });
lyr_ShellharbourtoSwampRoad_3.set('fieldAliases', {'id': 'id', });
lyr_DunmoretoCroomRoad_4.set('fieldAliases', {'id': 'id', });
lyr_WarrawongtoPortKembla_5.set('fieldAliases', {'id': 'id', 'colour': 'colour', });
lyr_SkiParktoShellharboutNorth_6.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', });
lyr_MinnamurratoBombo_7.set('fieldAliases', {'id': 'id', });
lyr_WarrawongtoKembleGrange_8.set('fieldAliases', {'id': 'id', 'colour': 'colour', });
lyr_WindangtoSkiPark_9.set('fieldAliases', {'id': 'id', });
lyr_WindangtoWarrawong_10.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', });
lyr_YallahDaptoAlbionPark_11.set('fieldAliases', {'id': 'id', 'colour': 'colour', });
lyr_YallahtoAlbionPark_12.set('fieldAliases', {'id': 'id', });
lyr_AlbionParktoCroomRoad_13.set('fieldAliases', {'id': 'id', });
lyr_CroomRoadtoAlbionPark_14.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', });
lyr_YallahtoSkiPark_15.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', });
lyr_KembaGrangetoYallah_16.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', });
lyr_WindangtoWarrawong_17.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', });
lyr_Merged_18.set('fieldAliases', {'id': 'id', });
lyr_WarrawongtoKembleGrange_1.set('fieldImages', {'id': 'TextEdit', 'colour': 'TextEdit', });
lyr_ShellharbourNtoWindang_2.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', });
lyr_ShellharbourtoSwampRoad_3.set('fieldImages', {'id': 'TextEdit', });
lyr_DunmoretoCroomRoad_4.set('fieldImages', {'id': 'TextEdit', });
lyr_WarrawongtoPortKembla_5.set('fieldImages', {'id': 'TextEdit', 'colour': 'TextEdit', });
lyr_SkiParktoShellharboutNorth_6.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', });
lyr_MinnamurratoBombo_7.set('fieldImages', {'id': 'TextEdit', });
lyr_WarrawongtoKembleGrange_8.set('fieldImages', {'id': 'TextEdit', 'colour': 'TextEdit', });
lyr_WindangtoSkiPark_9.set('fieldImages', {'id': 'TextEdit', });
lyr_WindangtoWarrawong_10.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', });
lyr_YallahDaptoAlbionPark_11.set('fieldImages', {'id': 'TextEdit', 'colour': 'TextEdit', });
lyr_YallahtoAlbionPark_12.set('fieldImages', {'id': 'TextEdit', });
lyr_AlbionParktoCroomRoad_13.set('fieldImages', {'id': 'TextEdit', });
lyr_CroomRoadtoAlbionPark_14.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', });
lyr_YallahtoSkiPark_15.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', });
lyr_KembaGrangetoYallah_16.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', });
lyr_WindangtoWarrawong_17.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', });
lyr_Merged_18.set('fieldImages', {'id': '', });
lyr_WarrawongtoKembleGrange_1.set('fieldLabels', {'id': 'no label', 'colour': 'no label', });
lyr_ShellharbourNtoWindang_2.set('fieldLabels', {'id': 'no label', 'Colour': 'no label', });
lyr_ShellharbourtoSwampRoad_3.set('fieldLabels', {'id': 'no label', });
lyr_DunmoretoCroomRoad_4.set('fieldLabels', {'id': 'no label', });
lyr_WarrawongtoPortKembla_5.set('fieldLabels', {'id': 'no label', 'colour': 'no label', });
lyr_SkiParktoShellharboutNorth_6.set('fieldLabels', {'id': 'no label', 'Colour': 'no label', });
lyr_MinnamurratoBombo_7.set('fieldLabels', {'id': 'no label', });
lyr_WarrawongtoKembleGrange_8.set('fieldLabels', {'id': 'no label', 'colour': 'no label', });
lyr_WindangtoSkiPark_9.set('fieldLabels', {'id': 'no label', });
lyr_WindangtoWarrawong_10.set('fieldLabels', {'id': 'no label', 'Colour': 'no label', });
lyr_YallahDaptoAlbionPark_11.set('fieldLabels', {'id': 'no label', 'colour': 'no label', });
lyr_YallahtoAlbionPark_12.set('fieldLabels', {'id': 'no label', });
lyr_AlbionParktoCroomRoad_13.set('fieldLabels', {'id': 'no label', });
lyr_CroomRoadtoAlbionPark_14.set('fieldLabels', {'id': 'no label', 'Colour': 'no label', });
lyr_YallahtoSkiPark_15.set('fieldLabels', {'id': 'no label', 'Colour': 'no label', });
lyr_KembaGrangetoYallah_16.set('fieldLabels', {'id': 'no label', 'Colour': 'no label', });
lyr_WindangtoWarrawong_17.set('fieldLabels', {'id': 'no label', 'Colour': 'no label', });
lyr_Merged_18.set('fieldLabels', {'id': 'no label', });
lyr_Merged_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});