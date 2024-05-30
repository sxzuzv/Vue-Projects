<template>
  <div class="main-map" ref="map">
  </div>
</template>

<script>
// node_modules에 위치해 있는 ol 폴더에서 지도와 관련된 모듈을 import 하여 사용한다.
import OlLayerTile from 'ol/layer/Tile.js';
import OlView from 'ol/View.js';
import OlMap from 'ol/Map.js';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj.js';
import {defaults} from 'ol/control.js';

export default {
  name: 'MainMap',
  data() {  // olMap이라는 data()를 정의한다.
    return {
      olMap: undefined,
    }
  },
  mounted() {
    /**
     * 정의한 data()에 OlMap을 생성해 저장한다.
     * OlMap 생성에 필요한 옵션: target, layers, view
     * target: 지도를 띄울 element를 찾아서 정의 -> 지도가 그려질 위치를 찾는 데에 ref 활용
     * layers: 레이어(화면에 종이 한 장을 얹는다.)를 구성한다. OlLayerTile 형태로 생성된 지도가 그려진다.
     * view: 사용자 화면에 보여질 위치를 지정한다. (대구광역시 북구의 위도, 경도 입력)
     * fromLonLat: 위도, 경도를 좌표계로 변환시키는 OpenLayers의 API (OpenLayers는 위치가 좌표계로 표현된다.)
     */
    this.olMap = new OlMap({
      target: this.$refs.map,
      controls: defaults({
        attribution: false,
        zoom: false,
        rotate: false
      }),
      layers: [
        new OlLayerTile({
          source: new OSM()
        })
      ],
      view: new OlView({
        center: fromLonLat([128.5828924, 35.8858646]), // 대구광역시 북구
        zoom: 10
      })
    })
  }
}
</script>

<style scoped>
.main-map {
  /* 지도가 화면에 가득찰 수 있도록 옵션 부여 */
  width: 100%;
  height: 100%;
}

</style>