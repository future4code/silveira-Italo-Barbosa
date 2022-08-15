




export const index = (
    source: string,
    query: string,
    Index: number = 0,
    sourceIndex: number = 0,
    queryIndex: number = 0
  ): number => {
    if (sourceIndex > source.length) {
      return -1;
    }
  
    if (queryIndex >= query.length) {
      return Index;
    }
  
    if (source[sourceIndex] === query[queryIndex]) {
      return index(source, query, Index, sourceIndex + 1, queryIndex + 1);
    } else {
      return index(source, query, Index + 1, Index + 1, 0);
    }
  };