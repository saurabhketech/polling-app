import React, { Component } from 'react';
import { connect } from "react-redux";
import { Accordion, Card, ListGroup, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { PolsRequest, updatePolsRequest } from "../../Redux/Actions/pols"
import Header from "../../components/navbar/navbar";
import EditPolModal from "../../components/edit-pol/edit-pol"
import "./Dashboard.css"
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            polsData: [],
            editData: {
            },
            showEditModal: false
        }
        this.closeEditModal = this.closeEditModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
    }

    async componentDidMount() {
        await this.props.PolRequest()
        this.setState({ polsData: this.props.polStatus.response })
    }

    handleChange(event) {
        let data = this.state.polsData.map(val => {
            if (val._id == event.currentTarget.id) {
                val.title = event.currentTarget.value
            }
            return val
        })
        this.setState({ polsData: data })
    }
    openEditModal(event) {
        let data = this.state.polsData.filter(val => val._id == event.currentTarget.id)
        this.setState({ editData: data[0], showEditModal: true })
    }

    closeEditModal() {
        this.setState({ showEditModal: false })
    }

    editTitle =  (event) => {
        let name = event.target.name;
        this.setState({ editData: {...this.state.editData, [name]: event.target.value} })
    }
    getPols = () => {
        let pols = [];
        if (this.props.polStatus && this.props.polStatus.response && this.props.polStatus.response.length) {
            pols = this.state.polsData.map(val =>
                <div>
                    <Accordion >
                        <Card id={val._id}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    {val.title}
                                </Accordion.Toggle>
                                <i className="glyphicon" id={val._id} onClick={this.openEditModal}><FaEdit /></i>

                                {/* <input type="text" id={val._id} name="title" value={val.title} onChange={this.handleChange} /> */}
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <ListGroup className="optionLists">
                                    {val.options.map(value => <ListGroup.Item>{value.option}    Vote: {value.vote}</ListGroup.Item>)}
                                </ListGroup>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>

            )
        }
        return pols
    }
    updateData = async () =>{
        await this.props.polUpdateRequest(this.state.editData);
        await this.props.PolRequest()
        this.setState({ polsData: this.props.polStatus.response, showEditModal: false })
    }
    render() {
        return (
            <div>
                <Header />
                <EditPolModal updatePolStatus={this.props.updatePolStatus} updateData={this.updateData} editTitle={this.editTitle} showEditModal={this.state.showEditModal} editData={this.state.editData} closeEditModal={this.closeEditModal} />
                <div className="heading">
                    <h3>Pols List</h3>
                </div>
                {this.props.polStatus && this.props.polStatus.response ? this.getPols() : null}
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        loginStatus: state.login,
        polStatus: state.pols,
        updatePolStatus: state.polsUpdate
    };
};

const mapDispatchToProps = dispatch => ({
    PolRequest: () => dispatch(PolsRequest()),
    polUpdateRequest: (formData) => dispatch(updatePolsRequest(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);