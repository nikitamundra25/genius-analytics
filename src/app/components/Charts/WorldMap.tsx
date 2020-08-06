import React from "react";
import { MapAjax } from "@syncfusion/ej2-maps";
import {
  MapsComponent,
  Inject,
  LayersDirective,
  LayerDirective,
  Legend,
  MapsTooltip
} from "@syncfusion/ej2-react-maps";

const WorldMap = ({ data }: any) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapsComponent
        width={"100%"}
        height={"100%"}
        id={"maps"}
        //background='transparent'
        zoomSettings={{
          enable: true,
        }}
        legendSettings={{
          visible: false,
          position: "Top",
        }}
        // titleSettings={{
        //   visible: false,
        //   text: "Population density (per square kilometer) - 2015",
        //   textStyle: {
        //     size: "16px",
        //   },
        // }}
      >
        <Inject services={[Legend, MapsTooltip]} />
        <LayersDirective>
          <LayerDirective
            shapeData={new MapAjax("./world-map.json")}
            shapePropertyPath="name"
            shapeDataPath="name"
            dataSource={data.legend}
            tooltipSettings={{
              // eslint-disable-next-line
              template:'<div id="markertooltiptemplate" style="width: 170px;opacity: 90%;background: rgba(53, 63, 76, 0.90);box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);padding:10px;border: 1px #abb9c6;border-radius: 4px;">' + // eslint-disable-next-line
                '<div style="font-size:13px;color:#ffffff;font-weight: 500;"><center>${name}</center></div>' + // eslint-disable-next-line
                '<hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">' + // eslint-disable-next-line
                '<div><span style="font-size:13px;color:#cccccc">Room Nights : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${roomNights}</span></div>' + // eslint-disable-next-line
                '<div><span style="font-size:13px;color:#cccccc">ADR : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${ADR}</span></div>' + // eslint-disable-next-line
                '<div><span style="font-size:13px;color:#cccccc">Revenue : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${revenue}</span></div></div>',
              visible: true,
              valuePath: "roomNights",
            }}
            // tooltipSettings={{
            //   visible: true,
            //   valuePath: "name",
            // }}
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
    </div>
  );
};

export default WorldMap;
