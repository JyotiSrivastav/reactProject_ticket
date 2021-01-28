import React from 'react';

class Viewalltickets extends React.Component {
    ticketsArray;
    constructor(props) {
        super(props);
        this.state = {
            ticketsArray: []
        }

    }
    componentDidMount() {
        this.getAllTicketsFromLocalStorage();
    }

    getAllTicketsFromLocalStorage = () => {
        // var Alltickets = JSON.parse(localStorage.getItem('Alltickets'))
        var ticketsArr = JSON.parse(localStorage.getItem('allTickets'));
        this.setState({ ticketsArray: ticketsArr.sort((a, b) => { return a.issueNumber - b.issueNumber }) })
    }

    render() {
        return (
            <div className="allPageDivWidth">
                <div >
                    <div className="filterDiv">
                        <h5 className="pageSubTitle"> Ticket List</h5>
                        <div>
                            <label>Created Date :  </label>
                            <select >
                                {
                                    this.state.ticketsArray.map(function (item) {
                                        return (<option>{item.createdDate}</option>)
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <table className="table ">
                        <thead>
                            <tr>
                                <td>Issue No</td><td>Subject</td><td>Discription</td>
                                <td>Assigned To</td><td>Assigned By</td><td>End Date</td>
                                <td>Created Date</td><td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // ticketsArray = JSON.parse(localStorage.getItem('allTickets'));
                                this.state.ticketsArray.map(function (item) {
                                    return (
                                        <tr>
                                            <td>{item.issueNumber}</td>
                                            <td>{item.subj}</td>
                                            <td>{item.discription}</td>
                                            <td>{item.assignedTo}</td>
                                            <td>{item.assignedBy}</td>
                                            <td>{item.endDate}</td>
                                            <td>{item.createdDate}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Viewalltickets;