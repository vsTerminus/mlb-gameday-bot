const interactionHandlers = require('../modules/interaction-handlers.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('subscribe_gameday')
        .setDescription('Subscribe this channel to live Gameday updates, including results of at-bats and other key events.')
        .addBooleanOption(option =>
            option.setName('scoring_plays_only')
                .setDescription('If true, the bot will only report scoring plays. The default is false.')
                .setRequired(false)),
    async execute (interaction) {
        try {
            await interactionHandlers.subscribeGamedayHandler(interaction);
        } catch (e) {
            console.error(e);
            if (interaction.deferred && !interaction.replied) {
                await interaction.followUp({
                    content: 'There was an error processing this command. If it persists, please reach out to the developer.',
                    ephemeral: true
                });
            } else if (!interaction.replied) {
                await interaction.reply({
                    content: 'There was an error processing this command. If it persists, please reach out to the developer.',
                    ephemeral: true
                });
            }
        }
    }
};
