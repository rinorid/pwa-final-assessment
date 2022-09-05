import makeStyles from '@material-ui/core/styles/makeStyles';
import {
    CreatePadding, FlexColumn, Centering, CreateMargin, ClearMarginPadding, FlexRow, CenterAbsolute,
} from '@theme_mixins';
import {
    GRAY_PRIMARY, GRAY_THIRD, PRIMARY, WHITE,
} from '@theme_color';

export default makeStyles((theme) => ({
    iconFeed: {
        fontSize: 18,
        color: GRAY_PRIMARY,
        fontWeight: '200',
    },
}));
