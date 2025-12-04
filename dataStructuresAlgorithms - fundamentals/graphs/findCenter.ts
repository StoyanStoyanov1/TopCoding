function findCenter(edges: number[][]): number {
    const [u1, v1] = edges[0];
    const [u2, v2] = edges[1];

    if (u1 === u2 || u1 === v2) return u1;

    return v1 === u2 ? v1 : v2;
}
