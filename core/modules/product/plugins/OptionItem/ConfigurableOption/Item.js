import dynamic from 'next/dynamic';

// import CustomRadio from '@common_radio';
// import SelectColor from '@common_forms/SelectColor';
// import SelectSize from '@common_forms/SelectSize';
import Typography from '@common_typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import classNames from 'classnames';

import useStyles from '@plugin_optionitem/ConfigurableOption/style';
// import SelectOption from '@common_optionconfigurable';
const CustomRadio = dynamic(() => import('@common_radio'), { ssr: true });
const SelectOption = dynamic(() => import('@common_optionconfigurable'), { ssr: true });

const ItemConfigurableView = (props) => {
    const {
        option, selected, value, handleSelect, error, loading, configProduct, isGrid, disableItem, ...other
    } = props;
    const styles = useStyles();
    const classItem = styles.stylesItemOption;

    if (option.isSwatch) {
        let selectedLabel = '';
        if (selected[option.attribute_code]) {
            selectedLabel = value.filter((val) => val.value === selected[option.attribute_code]);
            if (selectedLabel.length > 0) selectedLabel = selectedLabel[0].label;
        }
        const Label = () => (
            <div className={styles.labelContainer}>
                <Typography className="label-select" variant="label" type="bold" letter="uppercase">
                    {`${option.label.replace(/_/g, ' ')}`}
                </Typography>
                <span className="hidden-mobile label-select-value">{selectedLabel}</span>
            </div>
        );
        return (
            <CustomRadio
                CustomLabel={Label}
                flex="row"
                CustomItem={SelectOption}
                value={selected[option.attribute_code]}
                valueData={value}
                onChange={(val) => handleSelect(val, option.attribute_code)}
                className={isGrid ? styles.label : ''}
                classContainer={isGrid ? classNames(styles.classContainer, `product-OptionItem-${option.label}`) : ''}
                classItem={classItem}
                error={!!error[option.attribute_code] && !selected[option.attribute_code]}
                errorMessage={error[option.attribute_code] ? error[option.attribute_code] : ''}
                disabled={loading || disableItem}
                {...other}
            />
        );
    }

    return (
        <div className={styles.select}>
            <Typography className="label-select" variant="label" type="bold" letter="uppercase">
                {`${option.label}`}
            </Typography>
            <Select
                value={selected[option.attribute_code] || ''}
                onChange={(val) => handleSelect(val.target.value, option.attribute_code)}
                disabled={loading || configProduct.loading || disableItem}
            >
                {value.map((val, key) => (
                    <MenuItem key={key} value={val.value} disabled={val.disabled}>
                        {val.label}
                    </MenuItem>
                ))}
            </Select>
            {error[option.attribute_code] && !selected[option.attribute_code] && (
                <Typography variant="p" color="red">
                    {error[option.attribute_code]}
                </Typography>
            )}
        </div>
    );
};

export default ItemConfigurableView;
