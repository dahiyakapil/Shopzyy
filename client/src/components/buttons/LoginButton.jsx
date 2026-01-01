export const LoginButton = ({ onClick, loading }) => {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {loading ? 'Logging in...' : 'Login'}
        </button>
    );
}