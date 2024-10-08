interface SearchProp {
    totalCount: number
}

export const Search = ({totalCount} : SearchProp) => {
    console.log(totalCount)
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between">
                <h2 className="text-project-base-subtitle">Publicações</h2>
                <span className="text-project-base-span">{totalCount} {`${totalCount > 1 ? 'publicações' : 'publicação'}`}</span>
            </div>
            <form action="" className="w-full">
                <input className="w-full bg-project-base-input py-3 px-4 rounded-md border border-solid border-project-base-border" type="text" name="" id="" placeholder="Buscar conteúdo" />
            </form>
        </div>
    );
}