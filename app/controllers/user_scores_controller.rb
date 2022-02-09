class UserScoresController < ApplicationController
    def index 
        render json: UserScore.all 
    end
end
