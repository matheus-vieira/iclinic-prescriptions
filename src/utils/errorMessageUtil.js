const Messages = Object.create(null, {
    '00': {value: {error: { message: 'success', code: '00'}}},
    '01': {value: {error: { message: 'malformed request', code: '01'}}},
    '02': {value: {error: { message: 'physician not found', code: '02'}}},
    '03': {value: {error: { message: 'patient not found', code: '03'}}},
    '04': {value: {error: { message: 'metrics service not available', code: '04'}}},
    '05': {value: {error: { message: 'physicians service not available', code: '05'}}},
    '06': {value: {error: { message: 'patients service not available', code: '06'}}},
    '07': {value: {error: { message: 'internal server error', code: '07'}}}
});

module.exports = Messages;