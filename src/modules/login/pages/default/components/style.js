import makeStyles from '@material-ui/core/styles/makeStyles';

import {
    CreatePadding, FlexColumn, CreateMargin, Centering,
} from '@theme_mixins';
import { PRIMARY } from '@theme_color';

export default makeStyles((theme) => ({

    container: {
        height: '100%',
        width: '100%',
        ...FlexColumn,
        alignItems: 'center',
        ...CreatePadding(10, 30, 30, 30),
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            minHeight: 'calc(100vh - 70px)',
        },
        '& .forgotButton': {
            backgroundColor: '#d81b60',
        },
        '& .registerButton': {
            backgroundColor: '#1a237e !important',
        },
        '& .submitButton': {
            backgroundColor: '#00838f !important',
        },
        '& button': {
            borderRadius: '30px',
        }
    },
    formOtp: {
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
            ...CreatePadding(0, 30, 30, 30),
        },
    },
    desktopContainer: {
        marginBottom: 40,
    },
    btnLogin: {
        ...CreateMargin(16, 0, 10, 0),
    },
    footer: {
        zIndex: 0,
        width: '100%',
        ...CreatePadding(30, 30, 30, 30),
        ...Centering,
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',
    },
    selectLogin: {
        width: '100%',
        ...CreateMargin(0, 0, 15, -15),
    },
    rowCenter: {
        ...FlexColumn,
        width: '100%',
        height: '100%',
        textAlign: 'center',
    },
    headerSpan: {
        marginBottom: 20,
        borderBottom: `4px solid ${PRIMARY}`,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        backgroundColor: '#ffcdd2',
        borderRadius: '0 0 20px 0',
    },
    spanDivider: {
        height: 120,
    },
    spanLabel: {
        marginBottom: 20,
    },
    generalButton: {
        marginTop: 20,
    },
    title: {
        marginBottom: 30,
        marginLeft: 0,
        fontSize: 30,
    },
    customStyle: {
        border: `2px solid ${PRIMARY}`,
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '100%',
    }
}));
