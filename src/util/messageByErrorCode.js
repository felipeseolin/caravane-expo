const messageByErrorCode = (code) => {
  switch (code) {
    case 'auth/user-not-found':
      return 'E-mail inexistente';
    case 'auth/wrong-password':
      return 'Senha incorreta';
    case 'auth/invalid-email':
      return 'Digite um e-mail válido';
    default:
      return 'Erro desconhecido';
  }
};

export default messageByErrorCode;
