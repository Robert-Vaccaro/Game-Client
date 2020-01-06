import React from 'react';
import { MDBDataTable } from 'mdbreact';

class MainTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }
        render(){
            const data = {
                columns: [            
                    {
                    label: "Change Day",
                    field: "changeDayField",
                    width: 150
                  },
                  {
                    label: "Recommendation Status",
                    field: "recomStatusField",
                    width: 150
                  },
                  {
                    label: 'Area',
                    field: 'areaField',
                    width: 150
                  },
                  {
                    label: 'Zone',
                    field: 'zoneField',
                    width: 150
                  },
                  {
                    label: 'Bank',
                    field: 'bankField',
                    width: 150
                  },
                  {
                    label: 'Stand',
                    field: 'standField',
                    width: 150
                  },
                  {
                    label: 'NetWin',
                    field: 'netWinField',
                    width: 150
                  },
                  {
                    label: 'Old Denom',
                    field: 'oldDenomField',
                    width: 150
                  },
                  {
                    label: 'New Denom',
                    field: 'newDenomField',
                    width: 150
                  },
                  {
                    label: 'Old Payback %',
                    field: 'oldPaybackPerField',
                    width: 150
                  },
                  {
                    label: 'New Payback %',
                    field: 'newPaybackPerField',
                    width: 150
                  },
                  {
                    label: 'Asset',
                    field: 'assetField',
                    width: 150
                  },
                  {
                    label: 'Date',
                    field: 'dateField',
                    width: 150
                  }],
                rows: []
            }

            const changeDayField = this.props.apiRes.map((obj) => obj["Change Day"]);
            const recommendStatus = this.props.apiRes.map((obj) => obj["Recommendation Status"]);
            const area = this.props.apiRes.map((obj) => obj["Area"]);
            const zone = this.props.apiRes.map((obj) => obj["Zone"]);
            const bank = this.props.apiRes.map((obj) => obj["Bank"]);
            const stand = this.props.apiRes.map((obj) => obj["Stand"]);
            const netWin = this.props.apiRes.map((obj) => obj["NetWin"]);
            const oldDenom = this.props.apiRes.map((obj) => obj["Old Denom"]);
            const newDenom = this.props.apiRes.map((obj) => obj["New Denom"]);
            const oldPaybackPer = this.props.apiRes.map((obj) => obj["Old Payback %"]);
            const newPaybackPer = this.props.apiRes.map((obj) => obj["New Payback %"]);
            const asset = this.props.apiRes.map((obj) => obj["Asset"]);
            const theDate = this.props.apiRes.map((obj) => obj["Date"]);
            for(let i = 0;i<changeDayField.length;i++){
            data.rows.push(            
                  {
                    changeDayField: changeDayField[i],
                    recomStatusField: recommendStatus[i],
                    areaField: parseInt(area[i]),
                    zoneField: parseInt(zone[i]),
                    bankField: parseInt(bank[i]),
                    standField: parseInt(stand[i]),
                    netWinField: parseInt(netWin[i]),
                    oldDenomField: parseInt(oldDenom[i]),
                    newDenomField: parseInt(newDenom[i]),
                    oldPaybackPerField: parseInt(oldPaybackPer[i]),
                    newPaybackPerField: parseInt(newPaybackPer[i]),
                    assetField: parseInt(asset[i]),
                    dateField: theDate[i]
                  })
            }
            return (
              <MDBDataTable
                bordered
                small
                searching
                hover 
                sorting
                responsive
                paging
                data={data}
              />
            );
          }
        }
export default MainTable;