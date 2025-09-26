import { Box } from "@mui/material";
import { GeneralButton } from "./generalButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import styles from './selectDate.module.css';
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function SelectDate({ date, setDate }: { date: any, setDate: any }) {
    return (
        <Box className={styles.datePicker}>
            {(() => {
                const options = [
                    {
                        label: 'Hoy',
                        onClick: () => setDate(dayjs())
                    },
                    {
                        label: 'Ayer',
                        onClick: () => setDate(dayjs().subtract(1, 'day'))
                    }
                ]
                return options.map(option => {
                    const isSelected = option.label === 'Hoy'
                        ? date?.isSame(dayjs(), 'day')
                        : date?.isSame(dayjs().subtract(1, 'day'), 'day');

                    return (
                        <GeneralButton
                            variant={isSelected ? 'contained' : 'outlined'}
                            selected={isSelected}
                            disabled={false}
                            onClick={option.onClick}
                        >
                            {option.label}
                        </GeneralButton>
                    );
                })
            })()}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        label="Fecha de ingreso"
                        value={date}
                        onChange={(newValue) => { setDate(newValue) }}
                        format="DD/MM/YYYY"
                    />
                </DemoContainer>
            </LocalizationProvider>
        </Box>
    )
}