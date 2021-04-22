import React, { useEffect, useState } from 'react';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink
} from  '@coreui/react'
const OfertasList = props => {

    const {ofertas} = props;
  
    const orderByTitulo = (ofertas) => {
      return ofertas.sort((a, b) => a.titulo.localeCompare(b.titulo))
    }
  
    const listaOfertas = orderByTitulo(ofertas).map((oferta) => {
  
      const {id, titulo, descripcion,empresa} = oferta;
      return (
        
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              {titulo} - {empresa.nombre}
            </CCardHeader>
            <CCardBody>
              {descripcion}
            </CCardBody>
          </CCard>
        </CCol>
      )
    });
  
    return (
        <CRow>
            {listaOfertas}
        </CRow>
        
    );
  
  }
  
  export default OfertasList;