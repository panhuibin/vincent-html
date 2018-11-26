import React from 'react'

function PdfEntry({pdf, onClick}) {
    return(<div className = "pdf_entry" onClick={() => {onClick(title);}}>
      <p className = "pdf_entry_title">{pdf}</p>
    </div>)
  }

  function mapStateToProps(state) {
    return {
      pdfs: state.pdfs
    };
  }
  
  function mapDispatchToProps(dispatch){
    return {
      onEntryClicked:(entry)=> {
        dispatch({type: 'PDF_ENTRY_CLICKED', entry})
      }
    }
  }

const PdfList = connect(mapStateToProps, mapDispatchToProps)(
    function ({pdfs, onEntryClicked}) {
      return (
        <div className='container-fluid'>
          {pdfs.map((pdf) => <PdfEntry pdf={pdf} key={pdf} onClick={onEntryClicked} />)}
        </div>
      );
    }
  )

export default PdfList;