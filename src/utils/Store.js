export default class Store {
    static findContainer(containers, size, type) {
        return containers.find(function(container) {
            return container.getName() === `${size} ${type}`
        })
    }
    static transformContainersList(containers) {
        return containers
            .map(function(container) {
                return container.sizes.map(function(size) {
                    return Object.assign(
                        {
                            name: container.name
                        },
                        size
                    )
                })
            })
            .reduce(function(containers, containerList) {
                return containers.concat(containerList)
            }, [])
    }
}
