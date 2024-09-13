import Checkbox from '@mui/material/Checkbox';
import { Slider, Box, TextField, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';



export default function MiniFilter() {

    const [value, setValue] = useState([20, 37]);
    const [minInput, setMinInput] = useState("$20");
    const [maxInput, setMaxInput] = useState("$37");

    const formatValueWithDollar = (val) => `$${val}`;


    // Handler for slider changes
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        setMinInput(formatValueWithDollar(newValue[0]));
        setMaxInput(formatValueWithDollar(newValue[1]));
    };

    // Handler for minimum input changes
    const handleMinInputChange = (event) => {
        setMinInput(event.target.value);
    };

    // Handler for maximum input changes
    const handleMaxInputChange = (event) => {
        setMaxInput(event.target.value);
    };

    // Validate and update min value on blur
    const handleMinInputBlur = () => {
        const newMin = parseFloat(minInput.replace('$', ''));
        if (newMin <= value[1]) {
            setValue([newMin, value[1]]);
        } else {
            setMinInput(formatValueWithDollar(value[0])); // Reset if invalid
        }
    };

    // Validate and update max value on blur
    const handleMaxInputBlur = () => {
        const newMax = parseFloat(maxInput.replace('$', ''));
        if (newMax >= value[0]) {
            setValue([value[0], newMax]);
        } else {
            setMaxInput(formatValueWithDollar(value[1])); // Reset if invalid
        }
    };


    const Categories = [
        "Cameras", "Lenses", "Accessories", " Batteries & Power"
    ]
    const Brands = [
        "Canon", "Nikon", "Sony", "Fujifilm", "Panasonic"
    ]
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (

        <div className="col-span-3 flex flex-col gap-[30px]" >

            <div className="px-[10px] flex flex-col gap-[15px]">
                <h1 className="text-[28px] text-[#303841] font-medium">Filters</h1>

                <div className="flex flex-col gap-3">
                    <h1 className="text-[22px] text-[#F6C90E] font-normal">Category</h1>
                    <div>
                        {Categories.map((cat, index) => (
                            <div key={index} className='flex items-center'>
                                <Checkbox {...label} />
                                <h1>{cat}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-[22px] text-[#F6C90E] font-normal">Brands</h1>

                    <div>

                        {Brands.map((cat, index) => (
                            <div key={index} className='flex items-center'>
                                <Checkbox {...label} />
                                <h1>{cat}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3 ">
                    <h1 className="text-[22px] text-[#F6C90E] font-normal">Price</h1>
                    <div className="flex flex-col gap-3">
                        <Box sx={{ width: 200 }}>
                            <Slider
                                value={value}
                                onChange={handleSliderChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={100}
                                valueLabelFormat={formatValueWithDollar}
                                sx={{
                                    color: '#F6C90E',
                                    '& .MuiSlider-thumb': {
                                        backgroundColor: '#F6C90E',
                                    },
                                    '& .MuiSlider-track': {
                                        backgroundColor: '#F6C90E',
                                    },
                                    '& .MuiSlider-rail': {
                                        backgroundColor: '#D0D0D0',
                                    },
                                }}
                            />
                            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Minimum"
                                        type="text"
                                        value={minInput}
                                        onChange={handleMinInputChange}
                                        onBlur={handleMinInputBlur} // Validate on blur
                                        fullWidth
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                transition: 'border-color 0.3s, box-shadow 0.3s',
                                            },
                                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#303841',
                                            },
                                            '& .Mui-focused': {
                                                color: '#303841',
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Maximum"
                                        type="text"
                                        value={maxInput}
                                        onChange={handleMaxInputChange}
                                        onBlur={handleMaxInputBlur} // Validate on blur
                                        fullWidth
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                transition: 'border-color 0.3s, box-shadow 0.3s',
                                            },
                                            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#303841',
                                            },
                                            '& .Mui-focused': {
                                                color: '#303841',
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                </div>

                <button className="bg-[#F6C90E] hover:bg-[#FFCE00] flex gap-[20px] px-[20px] h-[40px] items-center justify-center rounded-md whitespace-nowrap">

                    <h1 className="text-[16px] font-medium text-[#3A4750]">Search</h1>
                    <FontAwesomeIcon className='text-[#3A4750]' icon={faMagnifyingGlass} />
                </button>

            </div>
        </div>


    )
}