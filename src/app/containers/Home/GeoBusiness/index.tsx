import React from "react";
import { Card } from "react-bootstrap";
// import { MapAjax } from '@syncfusion/ej2-maps';
// import {
//     MapsComponent, Inject, ILoadedEventArgs, MapsTheme, LayersDirective, LayerDirective,
//     Legend, MapsTooltip, ITooltipRenderEventArgs, LegendMode, LegendPosition
// } from '@syncfusion/ej2-react-maps';
// import * as data from './datasource.json';

export default (props: any) => {
  // let datasource: any = data as any;
  return (
    <>
      <Card>
        <Card.Header className='d-flex align-items-center justify-content-between'>
          <Card.Title>Geographic Origin of business</Card.Title>
        </Card.Header>
        <Card.Body>
        {/* <MapsComponent id="maps" 
                        zoomSettings={{
                            enable: false
                        }}
                        legendSettings={{
                            visible: true,
                            position: 'Top'
                        }}
                        titleSettings={{
                            text: 'Population density (per square kilometer) - 2015',
                            textStyle: {
                                size: '16px'
                            }
                        }}>
                        <Inject services={[Legend, MapsTooltip]} />
                        <LayersDirective>
                            <LayerDirective shapeData={new MapAjax('./world-map.json')}
                                shapePropertyPath='name'
                                shapeDataPath='name'
                                dataSource={datasource.legend}
                                tooltipSettings={{
                                    visible: true,
                                    valuePath: 'name',
                                    // format: '${name} : ${density}'
                                }}
                                shapeSettings={{
                                    colorValuePath: 'density',
                                    colorMapping: [
                                        {
                                            from: 0.00001, to: 100, color: 'rgb(153,174,214)', label: '<100'
                                        },
                                        {
                                            from: 100, to: 200, color: 'rgb(115,143,199)', label: '100 - 200'
                                        },
                                        {
                                            from: 200, to: 300, color: 'rgb(77,112,184)', label: '200 - 300'
                                        },
                                        {
                                            from: 300, to: 500, color: 'rgb(38,82,168)', label: '300 - 500'
                                        },
                                        {
                                            from: 500, to: 19000, color: 'rgb(0,51,153)', label: '>500'
                                        },
                                        {
                                            color: null, label: null
                                        }
                                    ]
                                }}
                            >
                            </LayerDirective>
                        </LayersDirective>
                    </MapsComponent> */}
       
        </Card.Body>
      </Card>
    </>
  );
};
