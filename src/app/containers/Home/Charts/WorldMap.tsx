import React from "react";
import { MapAjax } from "@syncfusion/ej2-maps";
import {
  MapsComponent,
  Inject,
  LayersDirective,
  LayerDirective,
  Legend,
  MapsTooltip,
} from "@syncfusion/ej2-react-maps";

const WorldMap = ({ data }: any) => {
  return (
    <MapsComponent
      width={"100%"}
      id='maps'
      zoomSettings={{
        enable: true,
      }}
      legendSettings={{
        visible: true,
        position: "Top",
      }}
      titleSettings={{
        text: "Population density (per square kilometer) - 2015",
        textStyle: {
          size: "16px",
        },
      }}>
      <Inject services={[Legend, MapsTooltip]} />
      <LayersDirective>
        <LayerDirective
          shapeData={new MapAjax("./world-map.json")}
          shapePropertyPath='name'
          shapeDataPath='name'
          dataSource={data.legend}
          tooltipSettings={{
            visible: true,
            valuePath: "name",
          }}
          shapeSettings={{
            colorValuePath: "density",
            colorMapping: [
              {
                from: 0.00001,
                to: 100,
                color: "rgb(153,174,214)",
                label: "<100",
              },
              {
                from: 100,
                to: 200,
                color: "rgb(115,143,199)",
                label: "100 - 200",
              },
              {
                from: 200,
                to: 300,
                color: "rgb(77,112,184)",
                label: "200 - 300",
              },
              {
                from: 300,
                to: 500,
                color: "rgb(38,82,168)",
                label: "300 - 500",
              },
              {
                from: 500,
                to: 19000,
                color: "rgb(0,51,153)",
                label: ">500",
              },
            ],
          }}
        />
      </LayersDirective>
    </MapsComponent>
  );
};

export default WorldMap;
