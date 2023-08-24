export default function Scp({scp})
{
    return (
        <div className="rounded mb-3 p-4 mt-2 shadow-lg bg-body-tertiary text-light"  data-bs-theme="dark">
            <h1>SCP-{scp.subject}</h1>
            <h2>{scp.class}</h2>
            <h3>Procedures: </h3>
            <p>{scp.procedures}</p>
            <h3>Description: </h3>
            <p>{scp.description}</p>
            {scp.additional && (
                <>
                <h3>Additional Information:</h3>
                <p>{scp.additional}</p>
                <p><code>{scp.code}</code></p>
                </>
            )}
            {scp.image && <img src={scp.image} alt={`SCP-${scp.subject}`} />}
        </div>
    );
}
