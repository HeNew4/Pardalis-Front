'use client';

import { useSelectedLayoutSegments } from 'next/navigation';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const segments = useSelectedLayoutSegments();

    // Efecto personalizado que se ejecuta en el ciclo de vida del cliente
    if (segments && segments.some((segment) => segment === 'profile')) {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        // Redirigir al componente de inicio de sesión en lugar de la página de perfil
        return <RedirectToLoginComponent />;
      }
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;