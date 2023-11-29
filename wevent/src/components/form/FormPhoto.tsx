import { useRef, useState } from 'react';

interface props {
  field: any;
  name: string;
  placeholder: string;
  saveImageEvent: (img: string) => void;
}

const FormInputPhoto = ({
  field,
  name,
  placeholder,
  saveImageEvent,
}: props) => {
  const { ref: fieldRef, onChange: fieldOnchange, ...imgField } = field;
  const [imgFile, setImgFile] = useState<string | null>(null);
  const imgRef = useRef(null);

  const saveImgFile = () => {
    let file;
    if (imgRef && imgRef.current && imgRef) {
      const ref = imgRef.current as any;
      file = ref.files[0];
    } else {
      file = null;
    }
    saveImageEvent(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result as string);
      };
    }
  };

  return (
    <label
      className={`cursor-pointer flex justify-center items-center w-[20rem] h-[11.25rem] border border-solid border-[#ADB3BA] ${
        imgFile ? '' : 'bg-white'
      }`}
      htmlFor={`${name}-image`}
    >
      {imgFile && <img src={`${imgFile}`} className={`object-cover`}></img>}
      {!imgFile && (
        <div className={`flex flex-col items-center text-[#ADB3BA] font-bold`}>
          {placeholder.split('\n').map((text, index) => (
            <div key={index}>{text}</div>
          ))}
        </div>
      )}
      <input
        type="file"
        accept={'image/png, image/gif, image/jpeg'}
        ref={imgRef}
        id={`${name}-image`}
        className={`hidden`}
        onChange={() => {
          saveImgFile();
        }}
        {...imgField}
      ></input>
    </label>
  );
};

export default FormInputPhoto;
