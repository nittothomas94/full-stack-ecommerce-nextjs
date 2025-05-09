const UploadImage = ({ onClick }) => {
  return (
    <div
      className="px-2 py-3 pb-8 bg-gray-300 rounded-[5px] rounded-b-[20px] hover:shadow-xl/30 hover:scale-105 relative"
      onClick={onClick}
    >
      <div className="w-43 h-35 flex items-center justify-center bg-white rounded-[5px]">
        <i className="material-icons" style={{ fontSize: '45px' }}>
          add_circle
        </i>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-[#382ee9] text-white h-12 rounded-b-[20px] flex items-center justify-between px-2">
        <h1>Upload</h1>
        <i className="material-icons">upload</i>
      </div>
    </div>
  );
};

export default UploadImage;
