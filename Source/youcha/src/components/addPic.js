import React from 'react';
import { Upload,Modal} from 'antd'
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
export default class Addpic extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        
        fileList:[]
      };
    }
    
  
    handleCancel = () => this.setState({ previewVisible: false });
  
    handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

      this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      });
    };
  
    handleChange = ({ fileList }) => {
      this.setState({ fileList })

      if(fileList.length !== 0)
        {
          this.props.toParent(this.state.fileList)
        }
      
    };

    // componentDidMount(){
    //   if(this.props.toson!=='')
    //   {
    //     alert("caoa")
    //     setTimeout(function(){
    //     this.setState({
    //     fileList: [
    //       {
    //         uid: -1,
    //         name: '1.png',
    //         status: 'done',
    //         url: '',
    //         thumbUrl: this.props.toson           
    //       }
    //     ],
    //   }); 
    //   this.forceUpdate(); 
    //  } .bind(this),5000); }
     
    //  }


    render() {
      // console.log("baby",this.state.fileList)
      const { previewVisible, previewImage, fileList, previewTitle } = this.state;
      const uploadButton = (
        <div>
          <div style={{ marginTop: 8 ,fontSize:"10px"}}>Upload</div>
        </div>
      );
      return (
        <>
          <Upload
            action=""
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            style={{border:"10px solid pink",width:"100px"}}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </>
      );
    }
  }
  