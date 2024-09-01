import prodimg from "../../assets/camera.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3A4750',
        },
    },
});

export default function Product({ id, name, price, category, isSelected, handleSelect, handleEdit, handleDelete }) {
    return (
        <ThemeProvider theme={theme}>
            <div className="grid grid-cols-10 gap-5 px-[20px] bg-[#EEEEEE] h-[75px] rounded-md">
                <div className="col-span-1 pl-[20px] flex justify-start items-center">
                    #{id}
                </div>
                <div className="col-span-5 pl-[20px] flex justify-start items-center gap-10">
                    <img src={prodimg} className="h-[50px]" alt="" />
                    <h1>{name}</h1>
                </div>
                <div className="col-span-1 pl-[20px] flex justify-start items-center">
                    ${price}
                </div>
                <div className="col-span-1 pl-[20px] flex justify-start items-center">
                    {category}
                </div>
                <div className="col-span-1 pl-[20px] flex justify-start items-center gap-10">
                    {/* Edit Button */}
                    <button onClick={() => handleEdit(id)} className="text-[#3A4750] hover:text-[#303841] text-[20px]">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>

                    {/* Delete Button */}
                    <button onClick={() => handleDelete(id)} className="text-red-500 hover:text-red-700 text-[20px]">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
                <div className="col-span-1 pl-[20px] flex justify-center items-center">
                    <Checkbox
                        checked={isSelected}
                        onChange={() => handleSelect(id)}
                        color="primary"
                    />
                </div>
            </div>
        </ThemeProvider>
    );
}
