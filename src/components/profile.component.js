import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      showTestigoBoard: false,
      currentUser: { username: "" }
    };
  }

   async componentDidMount() {
    const currentUser = await AuthService.getCurrentUser();
    console.log(currentUser);
    
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true , showTestigoBoard: currentUser.role.includes("ROLE_TESTIGO"), })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser, showTestigoBoard } = this.state;

    return (
      <div className="">
      {(this.state.userReady) ?
        <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="6" className="mb-4 mb-lg-0">
                <MDBCard className="profile mb-3" style={{ borderRadius: '.5rem' }}>
                  <MDBRow className="g-0">
                    <MDBCol md="4" className="gradient-custom text-center text-white"
                      style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp"
                        alt="Avatar" className="my-3" style={{ width: '80px' }} fluid />
                      <MDBTypography tag="h5">{currentUser.name}</MDBTypography>
                      <MDBCardText>cc: {currentUser.nit}</MDBCardText>
                      <MDBCardText>{currentUser.role.split('_')[1] }</MDBCardText>
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody className="p-4">
                      {showTestigoBoard && (
                        <div>
                        <MDBTypography tag="h6">Informacion:</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Zona</MDBTypography>
                            <MDBCardText className="text-muted">{currentUser.local}</MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Mesa</MDBTypography>
                            <MDBCardText className="text-muted">{currentUser.table}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        </div>
                        )}
                        <MDBTypography tag="h6">Informacion:</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Usuario</MDBTypography>
                            <MDBCardText className="text-muted">{currentUser.username}</MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Celular</MDBTypography>
                            <MDBCardText className="text-muted">{currentUser.phone}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
  
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>: null}
        </div>
    
    );
  }
}
