const mutations = {
    async createItem(parent, args, ctx, info){
        //TODO: Check if they logged in

        const item = await ctx.db.mutation.createItem({
            data:{
                ...args
            }
        }, info);
        return item;
    }
    // createDog(parents, args, ctx, info){
    //     global.dogs = global.dogs || [];
    //     // create a dog!
    //     const newDog = {name: args.name};
    //     global.dogs.push(newDog)
    //     return newDog
        
    // }
};

module.exports = mutations;
