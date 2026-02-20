function watchedVideosByFriends(
    watchedVideos: string[][],
    friends: number[][],
    id: number,
    level: number
): string[] {
    const visited: boolean[] = new Array(friends.length).fill(false);
    const videos: Map<string, number> = new Map();
    const queue: number[] = [id];

    visited[id] = true;
    let currLevel = 0;

    while (queue.length > 0 && currLevel <= level) {
        const size: number = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;

            if (currLevel === level) {
                for (const video of watchedVideos[node]) {
                    videos.set(video, (videos.get(video) ?? 0) + 1);
                }
            } else {
                for (const friend of friends[node]) {
                    if (!visited[friend]) {
                        visited[friend] = true;
                        queue.push(friend);
                    }
                }
            }
        }

        currLevel++;
    }

    return Array.from(videos.keys()).sort((a, b) => {
        const diff = videos.get(a)! - videos.get(b)!;
        if (diff !== 0) return diff;
        return a.localeCompare(b);
    });
}